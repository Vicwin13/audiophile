import Button from './Button';
import Image from 'next/image';
import React from 'react'

interface ItemCardProps extends React.ComponentPropsWithoutRef<'div'> {
  imageSrc?: string;
  imageAlt?: string;
  width?: number;
  height?: number;
  title?: string;
  imageStyling?: string;
  href?: string
}


export const ItemCards: React.FC<ItemCardProps> = ({
    imageAlt = "",
    imageSrc,
    width ,
    height ,
  title,
  href,
    imageStyling,
}) => {
  return (

    <section className='w-[350px] max-sm:w-3xs relative '>


      <div className='flex flex-col   justify-end items-center '>
        <div className=' relative'>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-3 bg-black blur-md rounded-full opacity-70"></div>
              {imageSrc && (
            <Image
              className={`drop-shadow-2xl ${imageStyling}`}
              src={imageSrc} alt={imageAlt} width={width} height={height}  />
              )}
          </div>
      {title && <h3 className='font-bold text-lg pt-9 pb-[15px] tracking-[1.29px]'>{title}</h3>}
      <Button
        variant='outline'
        className=''
        icon='https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761984062/HNG/Path_2_bspw6j.png'
        iconPosition='right'
        iconAlt='arrow'
        iconHeight={10 }
          iconWidth={5}
          href={href}
        
        >
        SHOP
      </Button>
    </div>
      <div className='bg-[#f1f1f1] min-h-[204px] rounded-lg absolute top-[30%] left-0 right-0 z-[-1]' >
        </div>
        </section>
  )
}
