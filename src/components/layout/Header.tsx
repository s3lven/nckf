import Image from "next/image"

const Header = ({imageSrc, alt, header, desc}: {imageSrc: string, alt:string, header:string, desc:string}) => {
    return (
        <div className="relative max-h-fit overflow-hidden flex justify-center">
            <Image 
                src={imageSrc}
                alt={alt}
                sizes="100vw"                
                quality={100}
                fill
                className="object-cover"
            />
            {/* Layout */}
            <div className="z-0 text-white text-center px-6 py-8 xl:px-[100px] xl:py-[100px] flex flex-col items-center justify-center gap-2 max-w-[630px] xl:max-w-[860px]">
                <h1 className="text-3xl font-bold lg:text-6xl">{header}</h1>
                <p className="text-xl font-medium lg:text-2xl">{desc}</p>
            </div>
        </div>
    )
}

export default Header