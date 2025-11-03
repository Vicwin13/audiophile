// components/OrderSummary.tsx
'use client'

import { CartItem } from '@/app/context/CartContext';
import Image from 'next/image';

interface OrderSummaryProps {
  cartItems: CartItem[];
  subtotal: number;
  vat: number;
  shipping: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartItems,
  subtotal,
  vat,
  shipping,
  total
}) => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-lg font-bold mb-6">SUMMARY</h2>
      
      {/* Cart Items */}
      <div className="space-y-4 mb-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <div className="bg-(--main-ash) rounded-lg p-2">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={40}
                height={40}
                className="rounded-lg"
              />
            </div>
                <div className='flex items-start justify-between w-full'>
                    
            <div className="flex-1">
              <h3 className="font-bold text-sm">{item.title}</h3>
              <p className="text-black/50 text-sm">{item.price}</p>
            </div>
            
            <div className="text-black/50 text-sm">
              x{item.quantity}
            </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pricing Breakdown */}
      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="text-black/50">TOTAL</span>
          <span className="font-bold">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-black/50">SHIPPING</span>
          <span className="font-bold">${shipping.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-black/50">VAT (INCLUDED)</span>
          <span className="font-bold">${vat.toFixed(2)}</span>
        </div>
      </div>
      
      {/* Grand Total */}
      <div className="flex justify-between mb-6">
        <span className="text-black/50">GRAND TOTAL</span>
        <span className="font-bold text-(--main-orange)">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;