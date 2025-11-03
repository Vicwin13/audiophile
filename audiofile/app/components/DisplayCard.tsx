import Button, {ButtonProps} from "./Button";

import Image from "next/image"
import React from "react"

interface DisplayCardProps extends React.ComponentPropsWithoutRef<'div'>{
    title?: string;
    subtitle?: string;
    text1?: string;
    imageSrc?: string;
    imageAlt?: string;
    children?: string;
    width?: number;
    height?: number;
    buttonText?: string;

    //other classnames

    secondClassName?: string;
    titleClassName?: string;
    text1ClassName?: string;
    subtitleClassName?: string;
    imgContClassName?: string;
    shadowClassName?: string;
    //buttons

    BtnProps?: Omit<ButtonProps, 'children'>;
    buttonClassName?: string;

}

export const DisplayCard: React.FC<DisplayCardProps> = ({
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
    
    ...rest

}) => {
  return (
      <>
          <div className={` flex items-center display  ${className}`} {...rest}>
          <div className={secondClassName}>
                  {
                      text1 && <p className={`text-sm uppercase pb-6  tracking-[10px] ${text1ClassName}`}> { text1}</p>
                  }
                  {title && <h1 className={`text-[56px] leading-[58px] pb-6 tracking-[2px]  uppercase font-bold ${titleClassName}`}>{title}</h1>}
                  {subtitle && <p className={`text-[15px] pb-10 leading-[25px] font-medium  ${subtitleClassName}`}>{subtitle}</p>}
                  
                  <Button className={` tracking-[1px] font-bold  ${buttonClassName}`}
                      {...BtnProps}
                    >
                      {buttonText}
                  </Button>
                  
              </div>
              <div className={`${imgContClassName} relative`}>
                  <div className={`absolute bottom-25 left-1/2 transform -translate-x-1/2 w-2/4 h-3 bg-black blur-lg rounded-full opacity-70 ${shadowClassName}`}></div>
                  {
                      imageSrc && (
                          <Image src={imageSrc} alt={imageAlt} width={width} height={height}/>
                      )
                  }
              </div>
          </div>
          
      
      
      
      
      </>
  )
}


