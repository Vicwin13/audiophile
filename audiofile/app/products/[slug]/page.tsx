// app/product/[slug]/page.tsx
"use client";

import { notFound, useParams } from "next/navigation";

import Feature from "@/app/components/Feature";
import GoBack from '@/app/components/Goback';
import Image from "next/image";
import { ItemCards } from "@/app/components/ItemCards";
import { ItemsCards2 } from '@/app/components/Items2';
import ProductDetailsCard from "@/app/components/ProductDetailsCard";
import { api } from "@/convex/_generated/api";
import { toast } from 'sonner';
import { useCart } from "@/app/context/CartContext";
import { useQuery } from "convex/react";
import { useState } from "react";

export default function ProductPage() {

  const [quantity, setQuantity] = useState(1);
  

  const {addToCart} = useCart()



  const { slug } = useParams<{ slug: string }>();
  const product = useQuery(api.products.getProductBySlug, { slug });


  const features = useQuery(api.productFeatures.getFeatures, 
    product ? { productId: product._id} : "skip"
  )


    const increment = () => {
    setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    if (!product) return;

    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product._id, 
        title: product.title,
        price: `$${product.price}`,
        imageSrc: product.image ?? "",
        imageAlt: product.title,
      });
    }

    toast.success(`${product.title} added to cart`), {
      duration: 3000,
      position: 'top-left',
    }
    
    setQuantity(1);
  };

    if (product === undefined) {

        return <div className="py-6 px-39 h-full">Loading…</div>;
    }
    if(!product) return notFound()
    
  return (  
    <section className="min-[870px]:px-39 sm:px-10 px-2">

      <GoBack  className=' pt-[78px] pb-10' fallbackPath='/'/>



      <div className="py-9">
        <ProductDetailsCard
          imageSrc={product?.image ?? ""}
          imageAlt={product?.title}
          title={product?.title}
          width={352}
          text1={product?.isFeatured ? 'NEW PRODUCT': '' }
          className="max-[870px]:flex-col-reverse items-center flex-row-reverse gap-10 min-[870px]:gap-32"
          text1ClassName="text-(--main-orange)"
          secondClassName="min-[870px]:w-[540px] w-full"
          subtitleClassName="text-black/60 min-[870px]:w-[410px] w-full"
          imgContClassName="bg-(--main-ash) rounded-lg min-sm:w-[540px] min-sm:h-[560px] w-full flex justify-center items-center"
          height={380}
          amountText={`$${product?.price}`}
          buttonText="ADD TO CART"
          subtitle={product?.description ?? ""}
          quantity={quantity}
          onIncrement={increment}
          onDecrement={decrement}
          imageStyling='min-w-[150px] w-[320px]'
          BtnProps={{
            className: "cursor-pointer",
            variant: "primary",
            size: "sm",
            onClick: handleAddToCart,
          }}
        />
      </div>

      <Feature features = {features ?? null} />

       <div className="grid-container max-w-[900px] h-[300px] mx-auto">

              <Image className="img1" src={`${product?.image1}`} alt={"Image"} width={445} height={200} />  
              <Image className="img2" src={`${product?.image2}`} alt={"Image"} width={445} height={200} />
              <Image className="img3 " src={`${product?.image3}`} alt={"Image"} width={445} height={200}/>


      </div>
       <section className=' h-auto px-2 sm:pt-10 md:px-39 pt-28 pb-12'>

            <p className='text-center md:text-4xl py-8 sm:text-2xl text-lg uppercase font-bold tracking-[1.14px] leading-2.5 sm:leading-5 md:leading-9'>You may also like</p>
            <div className=' flex justify-between max-sm:flex-col gap-7.5 items-center h-full'>

            <ItemsCards2
                title='XX99 MARK I'
                imageSrc='https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/image-removebg-preview_41_omdbp1.png'
                imageAlt='image'
                href='/headphones'
                width={140}
                height={193}
                
            
            />
             <ItemsCards2
                title='XX59'
                imageSrc='https://res.cloudinary.com/dvjx9x8l9/image/upload/v1762017113/HNG/image-removebg-preview_48_wr8gph.png'
                imageAlt='image'
                href='/headphones'
                width={164}
                height={190}
                
            
            />
             <ItemsCards2
                title='ZX9 SPEAKER'
                imageSrc='https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/image-removebg-preview_38_dzeo24.png'
                imageAlt='image'
                href='/speakers'
                width={143}
                height={172}
            />
              </div>
          </section>

      
                      <section className=" h-auto pt-28 pb-18">

        <div className="flex justify-between gap-7.5 items-center  h-full">

        <ItemCards
          imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/image-removebg-preview_41_omdbp1.png"
          imageAlt="item1"
          width={108}
          height={160}
          title="HEADPHONES"
        />
                <ItemCards
          imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/image-removebg-preview_38_dzeo24.png"
          imageAlt="item2"
          width={121.49}
          height={146}
          title="SPEAKERS"
        />
                <ItemCards
          imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/Group_5_mfq5tm.png"
          imageAlt="item3"
          width={140 }
          height={161}
          title="EARPHONES"
        />
                </div>
                
              </section>
    

    </section>
  );
}
