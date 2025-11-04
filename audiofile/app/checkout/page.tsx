// app/checkout/page.tsx
"use client";

import CheckoutForm, {CheckoutForHandle} from "@/app/components/CheckoutForm";
import { useRef, useState } from "react";

import CheckoutSuccessModal from "@/app/components/SuccessModal"; // Add this import
import OrderSummary from "@/app/components/OrderSummary";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useCart } from "@/app/context/CartContext";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const formRef = useRef<CheckoutForHandle>(null);
  const { cartItems, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Add modal state
  const [orderDetails, setOrderDetails] = useState<any>(null); // Store order details for modal
  
  const settings = useQuery(api.setting.getSettings);
  const vatRate = settings?.vatRate || 20; 
  const shippingFee = settings?.shippingFee || 50;
  const router = useRouter()

  const handleCheckout = async (formData: any) => {
    setIsProcessing(true);
    
    try {
      toast.loading('Processing your Order', {id: 'checkout'})

      // Process checkout logic here
      const result = await processCheckout({ 
        ...formData, 
        cartItems, 
        total: calculateTotal(),
        shipping: shippingFee,
        vat: calculateVAT()
      });
      
      // Store order details for the modal
      setOrderDetails({
        orderId: result.orderId,
        cartItems: cartItems,
        total: calculateTotal(),
        shipping: shippingFee,
        vat: calculateVAT()
      });

      toast.success("Order placed successfully! Check your mail for confirmation")
      
      // Clear cart after successful checkout
      clearCart();
      
      // Show success modal instead of redirecting
      setShowSuccessModal(true);
      
    } catch (error) {
      toast.error('Checkout failed, Please try again')
      console.error('Checkout failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    router.push('/'); // Redirect to home when modal is closed
  };

  const triggerFormSubmit = () => {
    if (formRef.current) {
      formRef.current.submitForm();
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (sum, item) => sum + (parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity), 
      0
    );
  };

  const calculateVAT = () => {
    const subtotal = calculateSubtotal();
    return subtotal * (vatRate / 100);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const vat = calculateVAT();
    return subtotal + vat + shippingFee;
  };

  if (cartItems.length === 0 && !showSuccessModal) {
    return (
      <section className="px-39 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p>Add some products to your cart before checking out.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="px-39 py-16 bg-(--another-ash)">
        <div className="flex justify-between gap-18">    
          <div className="bg-white w-full rounded-lg p-12 ">
            <h1 className="text-2xl font-bold mb-8">CHECKOUT</h1>
            <div className="w-full">
              <CheckoutForm 
                onSubmit={handleCheckout}
                isProcessing={isProcessing}
              />
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:sticky lg:top-8 min-w-[350px] h-fit">
            <OrderSummary
              cartItems={cartItems}
              subtotal={calculateSubtotal()}
              vat={calculateVAT()}
              shipping={shippingFee}
              total={calculateTotal()}
              
            />
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {orderDetails && (
        <CheckoutSuccessModal
          isOpen={showSuccessModal}
          onClose={handleCloseModal}
          orderId={orderDetails.orderId}
          cartItems={orderDetails.cartItems}
          total={orderDetails.total}
          shipping={orderDetails.shipping}
          vat={orderDetails.vat}
        />
      )}
    </>
  );
}

async function processCheckout(orderData: any) {
  const orderId = `ORD-${Date.now()}`; 

  try {
    console.log('📤 Starting email send process...');

    // 1. Send the confirmation email
    const emailResponse = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: orderData.email,
        name: orderData.name,
        cartItems: orderData.cartItems,
        total: orderData.total.toFixed(2),
        orderId: orderId,
        shipping: orderData.shipping,
        vat: orderData.vat
      }),
    });

    console.log('📨 Email API response status:', emailResponse.status);
    
    const emailResult = await emailResponse.json();
    console.log('📨 Email API response data:', emailResult);

    if (!emailResponse.ok) {
      console.error('❌ Email API failed:', emailResult);
      throw new Error(emailResult.error || 'Failed to send confirmation email');
    }

    console.log('✅ Email sent successfully!');
    return { success: true, orderId };

  } catch (error) {
    console.error('❌ Checkout processing failed:', error);
    throw error;
  }
}