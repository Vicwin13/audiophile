
'use client'

import { CartItem as ContextCartItem, useCart } from '../context/CartContext';

import Image from 'next/image';
import { useEffect } from 'react'

interface CheckoutSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  total: number;
  shipping: number;
  vat: number;
}


export default function CheckoutSuccessModal({
  isOpen,
  onClose,
  orderId,
  total,
  shipping,
  vat
}: CheckoutSuccessModalProps) {

  
  const {cartItems} = useCart()



  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

 const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', '').replace(',', ''));
    return sum + (price * item.quantity);
 }, 0);
  
  
  return (
     <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-white p-6 rounded-t-lg ">
          <div className="w-12 h-12 bg-(--main-orange) rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="md:text-4xl text-2xl leading-4 md:leading-9 tracking-[1.14px] font-bold mb-2 ">Thank you for your order!</h2>
          
          <p className="text-gray-600 mt-2">You will receive an email confirmation shortly.</p>
        </div>

        {/* Order Summary */}
        <div className="p-6">
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            {/* Items List */}
            <div className="space-y-4 mb-4">
              {cartItems.map((item) => {
                const price = parseFloat(item.price.replace('$', '').replace(',', ''));
                return (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {/* Display the actual image from cart context */}
                      <Image 
                        src={item.imageSrc} 
                        alt={item.imageAlt}
                        width={15}
                        height={15}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm">{item.title}</p>
                        <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                        <p className="text-gray-500 text-sm">${price.toFixed(2)} each</p>
                      </div>
                    </div>
                    <p className="font-semibold">${(price * item.quantity).toFixed(2)}</p>
                  </div>
                );
              })}
            </div>

            {/* Grand Total */}
            <div className="border-t pt-4">
 

           
              <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
                <span>Grand Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <button
            onClick={onClose}
            className="w-full bg-(--main-orange) text-white py-4 px-6 rounded-lg font-semibold hover:bg-(--sec-orange) transition-colors"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
}