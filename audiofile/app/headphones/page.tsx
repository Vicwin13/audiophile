'use client'

import { DisplayCard } from '../components/DisplayCard'
import Image from 'next/image'
import { ItemCards } from '../components/ItemCards'
import { ItemsCards2 } from '../components/Items2'
import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'

const Headphones = () => {

  const products = useQuery(api.products.getProductsByCategory, { category: 'headphones' })
  
  if (!products) return <div className='py-6 px-39 h-screen'>Loading...</div>

    return (
        <>
            <div className='w-full bg-[#131313] h-[200px] flex items-center justify-center'>
                <h1 className='text-center text-white uppercase font-bold text-[40px] tracking-[1.43] leading-11'>Headphones</h1>
            </div>
     
      <section className=' min-[870px]:px-39 sm:px-10 px-2'>
          <div className='py-9'>

            {
              products?.map((product, index) => (
                <DisplayCard
                  key={product._id}
                  imageSrc={product.image ?? ""}
                  imageAlt={product.title}
                  text1={product.isFeatured ? "NEW PRODUCT" : ""}
                  title={product.title}
                  width={349}
                  className={index % 2 === 0 ? 'min-[785px]:flex-row-reverse flex-col-reverse  gap-5 pb-12 md:gap-20' : ' pb-12  min-[785px]:flex-row flex-col-reverse gap-5 md:gap-20' }
           text1ClassName='text-(--main-orange)'
                secondClassName='lg:w-[540px]   max-md:text-center w-[70%] max-sm:w-full'
                subtitleClassName='text-black/60 md:w-[410px] w-full'
                imgContClassName='bg-(--main-ash) rounded-lg lg:w-[540px] lg:h-[560px] w-fit p-10 flex justify-center items-center'
                  height={386}
                  imageStyling='min-w-[150px] w-[250px]'
                buttonText="SEE PRODUCT"
                subtitle={product.description ?? ''}
                BtnProps=
                {{
                    className:'cursor-pointer',
                    variant: 'primary',
                    size: "sm",
                    href: `/products/${product.slug}`
                }}
            />
              ))                                
            }
              
           
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

          
        <section className=" h-auto px-2 sm:pt-10 md:px-39 pt-28 pb-18">

        <div className="flex justify-between max-sm:flex-col gap-7.5 items-center h-full">

        <ItemCards
          imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/image-removebg-preview_41_omdbp1.png"
          imageAlt="item1"
          width={108}
          height={160}
                title="HEADPHONES"
                href='/headphones'
        />
                <ItemCards
          imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/image-removebg-preview_38_dzeo24.png"
          imageAlt="item2"
          width={121.49}
          height={146}
                title="SPEAKERS"
                href='/speakers'
        />
                <ItemCards
          imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/Group_5_mfq5tm.png"
          imageAlt="item3"
          width={140 }
          height={161}
                title="EARPHONES"
                href='/earphones'
        />
                </div>
                
      </section>


      <section className="px-10 max-sm:px-2.5 md:px-39 pb-9">
        <div className="flex justify-between documentary items-center">
          <div >
            <h1 className="font-bold bring tracking-[1.43px] max-sm:tracking-normal text-[40px] max-sm:text-2xl max-sm:leading-7  leading-11 uppercase">Bringing you the <span className="text-(--main-orange)">best</span> audio gear</h1>
            <p className="md:w-[445px] max-sm:w-full max-sm:px-2  max-md:px-8 max-md:text-center pt-8 font-medium text-[15px] leading-[25px] max-sm:leading-[18px] text-black/50">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
          <Image src={"https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/Bitmap_2_tqykdw.png"} alt={"image"} width={540} height={588} />
        </div>
      </section>

    </section>
    </>
  )
}

export default Headphones