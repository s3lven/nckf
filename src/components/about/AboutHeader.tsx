import Image from "next/image"

const AboutHeader = () => {
    return (
        <div className="relative max-h-fit overflow-hidden flex justify-center">
            <Image 
                src="/images/kendo-background.jpg"
                alt="background image of two kendoka hitting men"
                sizes="100vw"                
                quality={100}
                fill
                className="object-cover"
            />
            {/* Layout */}
            <div className="z-0 text-white text-center px-6 py-8 xl:px-[100px] xl:py-[100px] flex flex-col items-center justify-center gap-2 max-w-[630px] xl:max-w-[860px]">
                <h1 className="text-3xl font-bold lg:text-6xl">About NCKF</h1>
                <p className="text-xl font-medium lg:text-2xl">Our mission is to promote kendo by fostering discipline and respect in a welcoming and inclusive community.</p>
            </div>
        </div>
    )
}

export default AboutHeader