import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className=" bg-[#131313] px-39 ">
      <div className="border-b-[#979797] border border-r-0 border-l-0 border-t-0 pb-9 pt-8 flex justify-between items-center">

      <div className="cursor-pointer flex items-center justify-center gap-10">
        <Image className="hamburger" src={"https://res.cloudinary.com/dvjx9x8l9/image/upload/v1762015637/HNG/Group_xrzm0q.png"} alt={"hamburger"} width={16} height={15}/>
        <Image width={143} height={25} src={"https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910243/HNG/audiophile_idkhnl.svg"} alt={"logo"}/>          
    </div>
          
        <ul className="text-white nav-links flex items-center gap-[34px]">
          <Link href={'/hero'}>
          <li>Home</li>
          </Link>
          <Link href={'/headphones'}>
              <li>Headphones</li>
          </Link>
          <Link href={"/speakers"}>
              <li>Speakers</li>
          </Link>
          <Link href={"/earphones"}>
              <li>Earphones</li>
          </Link>
          </ul>
      
          <div>
              <Link href={"#"}>
              <Image src={"https://res.cloudinary.com/dvjx9x8l9/image/upload/v1761910244/HNG/Combined_Shape_ducvhd.svg"} alt={"cart"} width={23.33} height={20} />
              </Link>
          </div>
      </div>
    </nav>
  )
}

export default Navbar