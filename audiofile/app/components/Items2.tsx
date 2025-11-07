import Button from "./Button";
import Image from "next/image";
import React from "react";

interface ItemCard2Props extends React.ComponentPropsWithoutRef<'div'>{
  imageSrc?: string;
  imageAlt?: string;
  width?: number;
  height?: number;
  title?: string;
  imageStyling?: string;
  href?: string
}


export const ItemsCards2: React.FC<ItemCard2Props> = ({
  imageSrc = "",
  imageAlt = "",
  width = 200,
  height = 150,
  title = "",
  imageStyling = "",
  href = "",
  ...rest
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2.5 sm:gap-5 md:gap-7.5"{...rest}>
          <div className="bg-(--main-ash) p-10 rounded-md px-[100px] py-[62px]">
              
      {imageSrc ? (
          <Image
          src={imageSrc}
          alt={imageAlt}
            width={width}
            height={height}

          className={imageStyling}
          />
        ) : null} 
        </div>
      {title ? <h3 className="md:text-2xl text-lg font-bold">{title}</h3> : null}
          <Button
              variant="primary"
              className=""
              size="sm"
              
          > SEE PRODUCT </Button>
    </div>
  );
}  