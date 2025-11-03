// app/checkout/page.tsx
"use client";

import CheckoutForm from "@/app/components/CheckoutForm";
import OrderSummary from "@/app/components/OrderSummary";
import { api } from "@/convex/_generated/api";
import { useCart } from "@/app/context/CartContext";
import { useQuery } from "convex/react";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Fetch store settings (VAT, shipping) from Convex
  const settings = useQuery(api.setting.getSettings);
  
  // If you don't have a settings table yet, use defaults temporarily
  const vatRate = settings?.vatRate || 20; // 20% default
  const shippingFee = settings?.shippingFee || 50; // $50 default

  const handleCheckout = async (formData: any) => {
    setIsProcessing(true);
    
    try {
      // Process checkout logic here
      const result = await processCheckout({ 
        ...formData, 
        cartItems, 
        total: calculateTotal(),
        shipping: shippingFee,
        vat: calculateVAT()
      });
      
      // Clear cart after successful checkout
      clearCart();
      
      // You can also redirect to a success page or show a success message
      console.log('Order successful:', result.orderId);
      
    } catch (error) {
      console.error('Checkout failed:', error);
    } finally {
      setIsProcessing(false);
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

  if (cartItems.length === 0) {
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
      <section className="px-39 py-16 bg-(--another-ash)">
    
          <div>
              
          </div>
      
    <div className="  flex justify-between gap-18">    
      <div className="bg-white w-full rounded-lg p-12 ">
        {/* Checkout Form */}
      <h1 className="text-2xl font-bold mb-8">CHECKOUT</h1>
        <div className="w-full">
          <CheckoutForm 
            onSubmit={handleCheckout}
            isProcessing={isProcessing}
          />
        </div>
      </div>
        
        {/* Order Summary */}
        <div className="lg:sticky lg:top-8 min-w-[350px]  h-fit">
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
  );
}

// ADD THIS FUNCTION AT THE BOTTOM - OUTSIDE THE COMPONENT
async function processCheckout(orderData: any) {
  const orderId = `ORD-${Date.now()}`; // Generate a simple unique order ID

  try {
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

    if (!emailResponse.ok) {
      throw new Error('Failed to send confirmation email');
    }

    return { success: true, orderId };

  } catch (error) {
    console.error('Checkout processing failed:', error);
    throw error;
  }
}