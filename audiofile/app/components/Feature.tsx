'use client'

import Image from "next/image"

const Feature = () => {
    return (
      <>
      <div className="py-9 flex items-start justify-between">

          <div className="w-[635px]">
              <h1 className="font-bold text-[32px] pb-8 tracking-[1.14px] leading-9">FEATURES</h1>
              <div>
                  
              <p className="font-medium text-[15px] leading-[25px] text-black/50">
                Featuring a genuine leather head strap and premium ear cups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.    
                  </p>
                  <p className="font-medium text-[15px] leading-[25px] text-black/50">
                      
                The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
                  </p>
              
              </div>
          </div>
          <div>
              <h1 className="font-bold text-[32px] pb-8 tracking-[1.14px] leading-9">IN THE BOX</h1>

              <div>
                  <div className="flex items-center gap-6"><span className="text-(--main-orange)">1x</span> <p className="text-black/50 font-medium text-[15px] leading-[25px]">Headphones Unit</p></div>
                  <div className="flex items-center gap-6"><span className="text-(--main-orange)">2x</span> <p className="text-black/50 font-medium text-[15px] leading-[25px]">Replacement Earcups</p></div>
                  <div className="flex items-center gap-6"><span className="text-(--main-orange)">1x</span> <p className="text-black/50 font-medium text-[15px] leading-[25px]">User Manual</p></div>
                  <div className="flex items-center gap-6"><span className="text-(--main-orange)">1x</span> <p className="text-black/50 font-medium text-[15px] leading-[25px]">3.5mm 5m Audio Cable</p></div>
                  <div className="flex items-center gap-6"><span className="text-(--main-orange)">1x</span> <p className="text-black/50 font-medium text-[15px] leading-[25px]">Travel Bag</p></div>
              </div>
              
          </div>
    </div>

          <div className="grid-container">

              <Image className="img1" src={"https://res.cloudinary.com/dvjx9x8l9/image/upload/v1762043118/HNG/Bitmap_5_cp595i.png"} alt={"Image"} width={445} height={200} />  
              <Image className="img2" src={"https://res.cloudinary.com/dvjx9x8l9/image/upload/v1762043118/HNG/Bitmap_4_labqk2.png"} alt={"Image"} width={445} height={200} />
              <Image className="img3 " src={"https://res.cloudinary.com/dvjx9x8l9/image/upload/v1762043118/HNG/Bitmap_3_r4wokr.png"} alt={"Image"} width={445} height={200}/>


          </div>


      </>



  )
}

export default Feature