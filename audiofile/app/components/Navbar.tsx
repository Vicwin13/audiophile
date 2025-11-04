'use client'

import Image from "next/image"
import Link from "next/link"
import { useCart } from "../context/CartContext"
import { useState } from "react"

const Navbar = () => {
  const {totalItems, setIsCartOpen} = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-[#131313] px-5 sm:px-10 md:px-39 relative">
      <div className="border-b-[#979797] border border-r-0 border-l-0 border-t-0 pb-9 pt-8 flex justify-between items-center">

        <div className="cursor-pointer flex items-center justify-center gap-10">
          <Image
            className="hamburger"
            src={"https://res.cloudinary.com/dvjx9x8l9/image/upload/v1762015637/HNG/Group_xrzm0q.png"}
            alt={"hamburger"}
            width={16}
            height={15}
            onClick={toggleMenu}
          />
          <Link href={'/hero'}>
            <Image width={143} height={25} src={"https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/audiophile_idkhnl.svg"} alt={"logo"}/>
          </Link>
        </div>
          
        {/* Desktop Navigation */}
        <ul className=" md:flex text-white nav-links items-center gap-[34px]">
          <Link href={'/hero'}>
            <li className="hover:text-(--sec-orange) transition-colors uppercase cursor-pointer">Home</li>
          </Link>
          <Link href={'/headphones'}>
            <li className="hover:text-(--sec-orange) transition-colors uppercase cursor-pointer">Headphones</li>
          </Link>
          <Link href={"/speakers"}>
            <li className="hover:text-(--sec-orange) transition-colors uppercase cursor-pointer">Speakers</li>
          </Link>
          <Link href={"/earphones"}>
            <li className="hover:text-(--sec-orange) transition-colors uppercase cursor-pointer">Earphones</li>
          </Link>
        </ul>
      
        <div className="relative">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-gray-800 rounded-full transition-colors"
            aria-label={`Open cart with ${totalItems} items`}
          >
            <Image
              src={"https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910244/HNG/Combined_Shape_ducvhd.svg"}
              alt={"cart"}
              width={23.33}
              height={20}
            />
            
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#131313] z-50 border-b border-[#979797]">
          <ul className="text-white flex flex-col py-4">
            <Link href={'/hero'} onClick={() => setIsMenuOpen(false)}>
              <li className="px-5 py-3 hover:bg-gray-800 hover:text-orange-500 transition-colors cursor-pointer">Home</li>
            </Link>
            <Link href={'/headphones'} onClick={() => setIsMenuOpen(false)}>
              <li className="px-5 py-3 hover:bg-gray-800 hover:text-orange-500 transition-colors cursor-pointer">Headphones</li>
            </Link>
            <Link href={"/speakers"} onClick={() => setIsMenuOpen(false)}>
              <li className="px-5 py-3 hover:bg-gray-800 hover:text-orange-500 transition-colors cursor-pointer">Speakers</li>
            </Link>
            <Link href={"/earphones"} onClick={() => setIsMenuOpen(false)}>
              <li className="px-5 py-3 hover:bg-gray-800 hover:text-orange-500 transition-colors cursor-pointer">Earphones</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar