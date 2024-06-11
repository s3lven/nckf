import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
    return (
        <div className="relative h-[80vh] flex flex-row overflow-hidden justify-around">
            <Image 
                src="/images/kendo-background.jpg"
                alt="background image of two kendoka hitting men"
                sizes="100vw"                
                quality={100}
                fill
                className="object-cover"
            />
            <div className="w-1/2 lg:w-1/3 h-full flex flex-col justify-center gap-5 z-0 text-center md:text-left text-balance drop-shadow-[0_45px_65px_rgba(0,0,0,1)]">
                <h1 className="text-3xl md:text-6xl text-white font-bold ">Northern California <br />Kendo Federation</h1>
                <p className=" md:text-xl text-white font-light">Experience the discipline and spirit of Kendo. Train with skilled instructors and become a master of the sword.</p>
                <div className="flex flex-row gap-2 text-white flex-wrap justify-center md:justify-start">
                    <Button asChild>
                        <Link href="/member-schools">Explore Dojos</Link>
                    </Button>
                    <Button asChild variant={"ghost"}>
                        <Link href="">Learn More</Link>
                    </Button>
                </div>
            </div>
            <span className="hidden md:block"></span>
        </div>
    )
}

export default HeroSection