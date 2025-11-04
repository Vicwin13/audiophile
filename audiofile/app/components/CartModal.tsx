
// components/CartModal.tsx
'use client'

import Button from './Button';
import Image from 'next/image';
import React from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

const CartModal: React.FC = () => {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    totalItems,
    isCartOpen,
    setIsCartOpen,
    
  } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity), 
    0
    );
    
const router = useRouter()

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 bg-opacity-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Modal */}
      <div className="flex min-h-fit max-sm:justify-center max-md:items-end  justify-end p-4 text-center  sm:p-20">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
          {/* Header */}
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">CART {`(${totalItems})`}</h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="bg-white px-4 pt-5 sm:p-6 max-h-96 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 py-8">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 py-4 ">
                   
                    <div className='bg-(--main-ash) rounded-lg flex items-center justify-between p-3'>
                            
                      <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={40}
                      height={40}
                      className="rounded-lg object-cover"
                      />
                      </div>
                    
                        <div className="flex items-start w-full justify-between ">
                            
                    <div>
                      <h4 className="font-bold text-sm leading-[25px]">{item.title}</h4>
                      <p className="text-black/50 text-sm leading-[25px]">{item.price}</p>
                    </div>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center rounded bg-(--main-ash)">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 ">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          x
                        </button>
                      </div>
                    </div>
                    
                    {/* <div className="text-right">
                      <p className="font-semibold">
                        ${(parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity).toFixed(2)}
                      </p>
                    </div> */}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className=" px-4 py-6 sm:px-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[15px] leading-[25px] text-black/50 font-medium">Total:</span>
                <span className="text-lg font-bold ">${totalPrice.toFixed(2)}</span>
              </div>
            <Button
                variant='primary'              
                              size='lg'
                              className='w-full'
                onClick={() => {
                    setIsCartOpen(false)
                    router.push('/checkout')
                   }}
                 >
                Checkout
            </Button>
                          
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;