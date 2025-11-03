import Image from "next/image";

interface HoverImageProps{
    defaultSrc: string;
    hoverSrc: string;
    imgAlt: string;
    width?: number;
    height?: number;
    className?: string
}



export const HoverImage: React.FC<HoverImageProps> = ({
    defaultSrc,
    hoverSrc,
    imgAlt,
    width,
    height,
    className
}) => {
    return (
        <div className={`group relative inline-block ${className}`}>
            <Image src={defaultSrc} alt={imgAlt} width={width} height={height}
            className="transition-opacity duration-200 group-hover:opacity-0"
            />      
        <Image
        src={hoverSrc}
        alt={imgAlt}
        width={width}
        height={height}
        className="absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
        </div>
    )
}