'use client'

import Button, { ButtonProps } from "./Button"
import React, { useState } from "react";

import Image from "next/image";

interface ProductCardProps extends React.ComponentPropsWithoutRef<'div'>{
    title?: string;
    subtitle?: string;
    text1?: string;
    imageSrc?: string;
    imageAlt?: string;
    children?: string;
    width?: number;
    height?: number;
    buttonText?: string;
    amountText?: string;
    imageStyling?: string;
    //other classnames

    secondClassName?: string;
    titleClassName?: string;
    text1ClassName?: string;
    subtitleClassName?: string;
    imgContClassName?: string;
    shadowClassName?: string;
    //buttons

    quantity?: number,
    onIncrement?: ()=> void,
    onDecrement?: ()=> void,

    BtnProps?: Omit<ButtonProps, 'children'>;
    buttonClassName?: string;

}

const ProductDetailsCard: React.FC<ProductCardProps> = ({
    title,
    subtitle,
    imageAlt = "",
    imageSrc,
    className,
    text1,
    width,
    height,
    buttonText= "",
    secondClassName,
    titleClassName,
    BtnProps,
    buttonClassName,
    text1ClassName,
    subtitleClassName,
    imgContClassName,
    shadowClassName,
    amountText = '$2,999',
    quantity = 1,
    onIncrement,
    onDecrement,
    imageStyling,
    ...rest
}) => {

  return (
    <>
          <div className={` flex items-center display  ${className}`} {...rest}>
          <div className={secondClassName}>
                  {
                      text1 && <p className={`text-sm uppercase pb-6  tracking-[10px] ${text1ClassName}`}> { text1}</p>
                  }
                  {title && <h1 className={`lg:text-[56px] max-sm:text-2xl text-4xl md:text-[40px] lg:leading-[58px]  md:leading-10 pb-6 md:pb-4 tracking-[2px]  uppercase font-bold ${titleClassName}`}>{title}</h1>}
                  {subtitle && <p className={`text-[15px] pb-10 leading-[25px] font-medium  ${subtitleClassName}`}>{subtitle}</p>}

                  <p className="font-bold text-lg tracking-[1.29px] pb-8">{ amountText }</p>
                  
                  <div className="flex items-center gap-4 ">
                      <div className="flex items-center h-9.5 w-30 justify-center gap-5 bg-(--main-ash) p">
                          <button className="text-black/25 text-[13px] tracking-[1px]" onClick={onDecrement}
                          aria-label="Decrease quantity"
                          >-</button>

                            <span className=" text-[13px] font-bold tracking-[1px]"> {quantity}</span>
                          
                          <button className="text-black/25 text-[13px] tracking-[1px]" onClick={onIncrement}
                          aria-label="Increase quantity">+</button>
                          
                        </div>
                  <Button className={` tracking-[1px] font-bold  ${buttonClassName}`}
                      {...BtnProps}
                      >
                      {buttonText}
                  </Button>
                  
                </div>
              </div>
              <div className={`${imgContClassName} relative`}>
                  <div className={`absolute bottom-25 left-1/2 transform -translate-x-1/2 w-2/4 h-3 bg-black blur-lg rounded-full opacity-70 ${shadowClassName}`}></div>
                  {
                      imageSrc && (
                          <Image src={imageSrc} alt={imageAlt} width={width} height={height} className={ imageStyling} />
                      )
                  }
              </div>
          </div>
          
      
      
      
      
      </>
  )
}

export default ProductDetailsCard