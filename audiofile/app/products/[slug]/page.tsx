// app/product/[slug]/page.tsx
"use client";

import { notFound, useParams } from "next/navigation";

import Feature from "@/app/components/Feature";
import Image from "next/image";
import ProductDetailsCard from "@/app/components/ProductDetailsCard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = useQuery(api.products.getProductBySlug, { slug });


  const features = useQuery(api.productFeatures.getFeatures, 
    product ? { productId: product._id} : "skip"
  )


    if (product === undefined) {

        return <div className="p-6">Loading…</div>;
    }
    if(!product) return <div>Product not found </div>
    
  return (  
    <section className="px-39">
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
          BtnProps={{
            className: "cursor-pointer",
            variant: "primary",
            size: "sm",
            href: "", // wire to your cart flow
          }}
        />
      </div>

      <Feature />

       <div className="grid-container">

              <Image className="img1" src={`${product?.image1}`} alt={"Image"} width={445} height={200} />  
              <Image className="img2" src={`${product?.image2}`} alt={"Image"} width={445} height={200} />
              <Image className="img3 " src={`${product?.image3}`} alt={"Image"} width={445} height={200}/>


          </div>
    

    </section>
  );
}
