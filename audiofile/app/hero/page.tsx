'use client'

import Button from "../components/Button"
import { DisplayCard } from "../components/DisplayCard"
import Image from "next/image"
import { ItemCards } from "../components/ItemCards"

const Hero = () => {
  return (
    <section className="">

      <section className="bg-black h-screen min-[870px]:px-39 sm:px-10 px-2 whole">
          
          <section className="w-[398px] pt-32">
              
          <DisplayCard
              imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910244/HNG/Bitmap_kgbjfr.svg"
              imageAlt="Hero"
              text1="NEW PRODUCT"
            title="X00 MARK II HEADPHONES"
            text1ClassName="text-white/50"
              width={0}
            height={0}
            buttonText="SEE PRODUCT"
            titleClassName="text-white"
            subtitleClassName="text-white/70"
            subtitle="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
            BtnProps={{
              variant: 'primary',
              size: "sm",
              href: "/headphones"
            }}
          />
          
              
          </section>
      </section>
      <section className="min-[870px]:px-39 sm:px-10 px-2 h-auto pt-30 pb-42">

        <div className="flex justify-between gap-7.5 items-center border-red-400 h-full">

        <ItemCards
          imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/image-removebg-preview_41_omdbp1.png"
          imageAlt="item1"
          width={108}
          height={160}
            title="HEADPHONES"
            href="/headphones"
        />
                <ItemCards
          imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/image-removebg-preview_38_dzeo24.png"
          imageAlt="item2"
          width={121.49}
          height={146}
            title="SPEAKERS"
            href="/speakers"
        />
                <ItemCards
          imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/Group_5_mfq5tm.png"
          imageAlt="item3"
          width={140 }
          height={161}
            title="EARPHONES"
            href="/earphones"
        />
          </div>

      </section>
      <section className="min-[870px]:px-39 sm:px-10 px-2 pb-30 ">
        <div className="third flex flex-col justify-end">
          
          <DisplayCard
            className="flex-row-reverse md:gap-[130px] justify-center "
            imageAlt="Speaker Image"
            imageSrc="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761990797/HNG/image-removebg-preview_38_1_rs4axe.png"
            width={410}
            height={ 493 }
            title="ZX9 SPEAKERS"
            secondClassName="w-1/3"
            subtitle="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
            buttonText="SEE PRODUCT"
            BtnProps={{
              variant: 'filled',
              size: "sm",
              href: "/speakers"
              
            }}
          />
          
        </div>
      </section>
      <section className="min-[870px]:px-39 sm:px-10 px-2 pb-30      ">

      <section className="sect4  ">
          <div className="h-full text-center flex flex-col pl-24 justify-center items-start  w-fit ">
            <h1 className="text-[28px] font-bold tracking-[2px] mb-8">ZX7 SPEAKER</h1>
            <Button variant="secondary" size="sm" href="/speakers">
              SEE PRODUCT
            </Button>
            </div>
      </section>
      </section>


      <section className="flex min-[870px]:px-39 sm:px-10 px-2 pb-30 items-center justify-center gap-7.5">
        <div className="h-80 w-[540px] sect5-img ">
         
        </div>
        <div className="bg-[#f1f1f1] rounded-lg h-80 w-[540px]">
          <div className="h-full text-center flex flex-col pl-24 justify-center items-start  w-fit ">
            <h1 className="text-[28px] font-bold tracking-[2px] mb-8">YX1 EARPHONES</h1>
            <Button variant="secondary" size="sm" href="/earphones">
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </section>

      <section className="  md:min-[870px]:px-39 sm:px-10 px-2 pb-9">
        <div className="flex justify-between items-center">
          <div >
            <h1 className="font-bold tracking-[1.43px] text-[40px] leading-11 uppercase">Bringing you the <span className="text-(--main-orange)">best</span> audio gear</h1>
            <p className="md:w-[445px] pt-8 font-medium text-[15px] leading-[25px] text-black/50">
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