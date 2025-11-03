// app/product/[slug]/page.tsx
"use client";

import { Toaster, toast } from 'sonner';
import { notFound, useParams } from "next/navigation";

import Feature from "@/app/components/Feature";
import GoBack from '@/app/components/Goback';
import Image from "next/image";
import ProductDetailsCard from "@/app/components/ProductDetailsCard";
import { api } from "@/convex/_generated/api";
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
    <section className="px-39">

      <GoBack  className=' pt-[78px] pb-10' fallbackPath='/'/>



      <div className="py-9">
        <ProductDetailsCard
          imageSrc={product?.image ?? ""}
          imageAlt={product?.title}
          title={product?.title}
          width={352}
          text1={product?.isFeatured ? 'NEW PRODUCT': '' }
          className="flex-row-reverse md:gap-32"
          text1ClassName="text-(--main-orange)"
          secondClassName="w-[540px]"
          subtitleClassName="text-black/60 w-[410px]"
          imgContClassName="bg-(--main-ash) rounded-lg w-[540px] h-[560px] flex justify-center items-center"
          height={380}
          amountText={`$${product?.price}`}
          buttonText="ADD TO CART"
          subtitle={product?.description ?? ""}
          quantity={quantity}
          onIncrement={increment}
          onDecrement={decrement}
          BtnProps={{
            className: "cursor-pointer",
            variant: "primary",
            size: "sm",
            onClick: handleAddToCart,
          }}
        />
      </div>

      <Feature features = {features ?? null} />

       <div className="grid-container">

              <Image className="img1" src={`${product?.image1}`} alt={"Image"} width={445} height={200} />  
              <Image className="img2" src={`${product?.image2}`} alt={"Image"} width={445} height={200} />
              <Image className="img3 " src={`${product?.image3}`} alt={"Image"} width={445} height={200}/>


      </div>
      <div>
        <Toaster/>
      </div>
    

    </section>
  );
}
