import { HoverImage } from './HoverIcon'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
      <footer className='bg-black text-white'>
          <div className='px-10 max-sm:px-5 md:px-39 pt-19 pb-12 '>
              <div className='relative'>
           
          <div className='flex  max-md:justify-start logs md:justify-between items-start max-sm:items-center   md:items-center md:flex-row flex-col pb-9 max-md:pb-5'>
              <Image src={'https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/audiophile_idkhnl.svg'} alt={'Logo'}
              width={143} height={25} className='pb-8'
                  />
                  
                  <div className='foot-links flex items-center gap-[35px] pt-2.5 max-md:gap-3.5'>
                      <Link href={'/'} className='link'>
                            HOME
                      </Link>
                        <Link href={'/headphones'} className='link'>
                            HEADPHONES
                      </Link>
                        <Link href={'/speakers'} className='link'>
                            SPEAKERS
                      </Link>
                        <Link href={'earphones'} className='link'>
                            EARPHONES
                      </Link>
                  </div>
              </div>
              <div className='md:w-[540px] pb-14'>
                  <p className='text-white/50 max-sm:text-center font-medium text-[15px] leading-6'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
              </div>
              <div className='flex justify-between items-center max-sm:flex-col '>
                  <p className='text-white/50 font-bold text-[15px] leading-[25px]'>Copyright 2025. All Rights Reserved</p>

                  <div className='flex items-center gap-6 max-md:gap-1.5 md:absolute bottom-[25%] right-2.5'>
                      <Link href={'#'}>
                          <HoverImage defaultSrc={'https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910242/HNG/Path_fvjtt3.svg'} hoverSrc={'https://res.cloudinary.com/dvjx9x8l9/image/upload/v1762011408/HNG/Path_ebufby.png'}
                              imgAlt={'fb-icon'}
                              width={24} height={24}
                              />
                      </Link>
                        <Link href={'#'}>
                      <HoverImage defaultSrc={'https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910244/HNG/Path_1_sczyy3.svg'} hoverSrc={'https://res.cloudinary.com/dvjx9x8l9/image/upload/v1762011408/HNG/Path_1_pc99mu.png'} 
                      imgAlt={'fb-icon'}
                      width={24} height={24}
                      />
                      </Link>
                        <Link href={'#'}>
                      <HoverImage defaultSrc={'https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910242/HNG/Shape_qlovoo.svg'} hoverSrc={'https://res.cloudinary.com/dvjx9x8l9/image/upload/v1762011408/HNG/Shape_lakvir.png'} 
                      imgAlt={'fb-icon'}
                      width={24} height={24}
                      />
                      </Link>
                  </div>
              </div>
        </div>
             </div>  
    </footer>
  )
}

export default Footer