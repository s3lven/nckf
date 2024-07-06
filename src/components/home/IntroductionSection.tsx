import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

const IntroductionSection = () => {
    return (
        // Section
        <div className="flex flex-col justify-center items-center py-8 px-6 mx-auto max-w-[1440px]
                        lg:px-[100px] lg:py-[120px]">
            {/* Layout */}
            <div className="flex flex-col gap-4 justify-center items-center
                            sm:flex-row">
                {/* Content */}
                <div className="flex flex-col gap-4 w-fit">
                    <h1 className="font-bold text-3xl lg:text-5xl">What is Kendo?</h1>
                    <p className="font-normal text-base sm:text-balance sm:w-fit lg:text-xl">
                        Kendo is a traditional Japanese martial art that focuses on discipline, respect, and self-improvement. Through rigorous training and practice, practitioners develop physical strength, mental resilience, and a deep understanding of Japanese culture.
                    </p>
                    <Button asChild className="w-fit">
                        <Link href="#">Learn More</Link>
                    </Button>
                </div>
                {/* Image */}
                <div className="w-full max-w-[600px]">
                    <Image 
                        src={"/images/kendo-background.jpg"}
                        alt="background image of two kendoka"
                        quality={100}
                        width={600}
                        height={600}
                        className="aspect-video sm:aspect-square object-cover rounded-2xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default IntroductionSection