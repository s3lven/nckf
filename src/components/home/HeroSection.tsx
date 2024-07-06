import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
    return (
        <div className="relative h-[50vh] overflow-hidden
                        lg:h-fit">
            <Image 
                src="/images/kendo-background.jpg"
                alt="background image of two kendoka hitting men"
                sizes="100vw"                
                quality={100}
                fill
                className="object-cover"
            />
            <div className="lg:px-[100px] lg:py-[200px] lg:w-screen lg:max-w-[1240px]">
                <div className="h-full flex flex-col justify-center gap-5 z-0 text-center text-balance drop-shadow-[0_45px_65px_rgba(0,0,0,1)]
                                lg:text-left lg:w-full ">
                    <h1 className="text-3xl sm:text-6xl text-white font-bold ">Northern California <br />Kendo Federation</h1>
                    <p className=" text-base lg:text-xl text-white font-normal">Experience the discipline and spirit of Kendo. Train with skilled instructors and become a master of the sword.</p>
                    <div className="flex flex-row gap-2 text-white flex-wrap justify-center
                                    lg:justify-start">
                        <Button asChild className="font-semibold">
                            <Link href="/member-schools">Join NCKF</Link>
                        </Button>
                        <Button asChild variant={"ghost"} className="font-semibold">
                            <Link href="">Explore Dojos</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection