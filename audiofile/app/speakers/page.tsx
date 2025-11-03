'use client'

import { DisplayCard } from "../components/DisplayCard"
import Image from "next/image"
import { ItemCards } from "../components/ItemCards"

const Speakers = () => {
  return (
      <>
         <div className='w-full bg-[#131313] h-[200px] flex items-center justify-center'>
                <h1 className='text-center text-white uppercase font-bold text-[40px] tracking-[1.43] leading-11'>Speakers</h1>
        </div>
          <section className="px-39">
              <div className='py-9'>
              
              <DisplayCard
                imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761990797/HNG/image-removebg-preview_38_1_rs4axe.png"
                imageAlt="Hero"
                text1="NEW PRODUCT"
                title="ZX9 SPEAKER"
                width={290}
                className='flex-row-reverse md:gap-32'
                text1ClassName='text-(--main-orange)'
                secondClassName='w-[540px]'
                subtitleClassName='text-black/60 w-[410px]'
                imgContClassName='bg-(--main-ash) rounded-lg w-[540px] h-[560px] flex justify-center items-center'
                      height={350}
                      titleClassName="w-min"
                buttonText="SEE PRODUCT"
                subtitle="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
                BtnProps=
                {{
                    variant: 'primary',
                    size: "sm"
                }}
            />
          </div>
               <div className='py-9'>
              
              <DisplayCard
                imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1762033565/HNG/image-removebg-preview_49_jxmaw8.png"
                imageAlt="Hero"
                title="ZX7 SPEAKER"
                width={268}
                className='md:gap-32'
                text1ClassName='text-(--main-orange)'
                secondClassName='w-[540px]'
                subtitleClassName='text-black/60 w-[410px]'
                imgContClassName='bg-(--main-ash) rounded-lg w-[540px] h-[560px] flex justify-center items-center'
                      height={380}
                      titleClassName="w-min"
                buttonText="SEE PRODUCT"
                subtitle="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
                BtnProps=
                {{
                    variant: 'primary',
                    size: "sm"
                }}
            />
              </div>
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
              
                  <section className=" pt-10 mt-10 pb-12">
        <div className="flex justify-between items-center">
          <div >
            <h1 className="font-bold tracking-[1.43px] text-[40px] leading-11 uppercase">Bringing you the <span className="text-(--main-orange)">best</span> audio gear</h1>
            <p className="md:w-[445px] pt-8 font-medium text-[15px] leading-[25px] text-black/50">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
          <Image src={"https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/Bitmap_2_tqykdw.png"} alt={"image"} width={540} height={560} />
        </div>
      </section>
          
              
      </section>
      
      </>
  )
}

export default Speakers
