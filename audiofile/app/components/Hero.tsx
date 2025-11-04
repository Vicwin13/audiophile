'use client'

import Button from "./Button"
import { DisplayCard } from "./DisplayCard"
import Image from "next/image"
import { ItemCards } from "./ItemCards"

const Hero = () => {
  return (
    <section className="">

      <section className="bg-black h-screen px-10 md:px-39 whole">
          
          <section className="md:w-[398px] max-md:mx-auto  pt-32">
              
          <DisplayCard
              imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910244/HNG/Bitmap_kgbjfr.svg"
              imageAlt="Hero"
              text1="NEW PRODUCT"
            title="X00 MARK II HEADPHONES"
            text1ClassName="text-white/50 max-sm:text-[15px]"
              width={0}
            height={0}
            buttonText="SEE PRODUCT"
            titleClassName="text-white max-sm:text-[36px] max-sm:leading-8"
            subtitleClassName="text-white/70 max-sm:text-[15px] max-sm:py-8"
            subtitle="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
            BtnProps={{
              variant: 'primary',
              size: "sm"
            }}
          />
          
              
          </section>
      </section>
      <section className="max-sm:px-2.5 px-10 md:px-39 h-auto pt-30 pb-42  max-md:pb-16 max-sm:pb-10">

        <div className="flex justify-between max-sm:flex-col gap-7.5 items-center h-full">

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
      <section className="max-sm:px-2.5 px-10 md:px-39 pb-30  max-md:pb-16 max-sm:pb-10">
        <div className="third flex flex-col justify-center items-center">
          
          <DisplayCard
            className="flex-row-reverse h-auto gap-10 md:items-start max-md:gap-2 max-md:flex-col-reverse max-md:items-start md:gap-25 pb-8 justify-center max-md:justify-start "
            imageAlt="Speaker Image"
            imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761990797/HNG/image-removebg-preview_38_1_rs4axe.png"
            width={410}
            height={493}
            title="ZX9 SPEAKERS"
            secondClassName="w-1/3  max-md:w-full max-md:text-align max-md:w-fit max-md:mx-auto  "
            subtitle="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
            buttonText="SEE PRODUCT"
            titleClassName="max-md:text-center max-sm:text-[30px] my-0 text-white max-md:w-1/2 max-md:mx-auto"
            imageStyling="w-70 h-70 max-sm:w-50 max-sm:h-50"
            subtitleClassName="max-md:text-center text-white max-md:w-1/2 max-md:mx-auto"
            BtnProps={{
              variant: 'filled',
              size:"sm"
              
            }}
          />
          
        </div>
      </section>
      <section className="px-10 max-sm:px-2.5 md:px-39 pb-30  max-md:pb-16 max-sm:pb-10    ">

      <section className="sect4  ">
          <div className="h-full text-center flex flex-col pl-24 max-md:pl-12 max-sm:pl-3 max-md:text-left justify-center items-start  w-fit ">
            <h1 className="text-[28px] font-bold tracking-[2px] mb-8 max-sm:text-lg">ZX7 SPEAKER</h1>
            <Button variant="secondary" size="sm">
              SEE PRODUCT
            </Button>
            </div>
      </section>
      </section>


      <section className="flex max-sm:px-2.5 px-10 md:px-39 pb-30 items-center max-sm:flex-col justify-center gap-7.5">
        <div className="h-80 w-[540px] max-sm:w-full sect5-img ">
         
        </div>
        <div className="bg-[#f1f1f1] rounded-lg h-80 w-[540px] max-sm:w-full">
          <div className="h-full text-center flex flex-col pl-24 max-md:pl-12 max-sm:pl-3 max-md:text-left justify-center items-start  w-fit ">
            <h1 className="text-[28px] font-bold tracking-[2px] mb-8 max-sm:text-lg">YX1 EARPHONES</h1>
            <Button variant="secondary" size="sm">
              SEE PRODUCT
            </Button>
          </div>
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
  )
}

export default Hero