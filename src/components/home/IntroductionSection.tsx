import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const IntroductionSection = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center py-6 max-w-[1440px] mx-auto ">
            <div className="w-full mx-5 py-5 flex flex-col justify-center items-center lg:flex-row md:justify-between gap-10 rounded-xl ">
                <div className="flex flex-col items-center md:items-start justify-center gap-5 max-w-[480px]">
                    <h2 className="text-lg md:text-xl font-semibold">Introduction</h2>
                    <h1 className="text-3xl md:text-5xl font-semibold">What Is Kendo?</h1>
                    <p className="text-sm md:text-lg text-center text-balance md:text-left">Kendo is a traditional Japanese martial art that focuses on discipline, 
                        respect, and self-improvement. Through rigorous training and practice, 
                        practitioners develop physical strength, mental resilience, and a deep 
                        understanding of Japanese culture.
                    </p>
                    <div>
                        <Button asChild>
                            <Link href="#">Learn More</Link>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image 
                        src={"/images/kendo-background.jpg"}
                        alt="background image of two kendoka hitting men"
                        quality={100}
                        width={700}
                        height={700}
                        className="aspect-[1/1] object-cover object-right rounded-2xl max-w-[320px] sm:max-w-[480px] xl:max-w-[710px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default IntroductionSection