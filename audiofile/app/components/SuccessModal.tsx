// app/components/CheckoutSuccessModal.tsx
'use client'

import { useEffect } from 'react'

interface CartItem {
  title: string;
  price: number;
  quantity: number;
}

interface CheckoutSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  cartItems: CartItem[];
  total: number;
  shipping: number;
  vat: number;
}

export default function CheckoutSuccessModal({
  isOpen,
  onClose,
  orderId,
  cartItems,
  total,
  shipping,
  vat
}: CheckoutSuccessModalProps) {
  
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

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-white p-6 rounded-t-lg border-b">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Thank you for your order!</h2>
          <p className="text-gray-600">Order confirmation #{orderId}</p>
          <p className="text-gray-600 mt-2">You will receive an email confirmation shortly.</p>
        </div>

        {/* Order Summary */}
        <div className="p-6">
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            {/* Items List */}
            <div className="space-y-4 mb-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs font-bold">Item</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            {/* Grand Total */}
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">VAT:</span>
                <span>${vat.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
                <span>Grand Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <button
            onClick={onClose}
            className="w-full bg-(--main-orange) text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
}