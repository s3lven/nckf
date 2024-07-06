import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

const CallToAction = () => {
    return (
        <div className="relative overflow-hidden flex flex-col justify-center items-center">
            <Image 
                src="/images/kendo-background.jpg"
                alt="background image of two kendoka hitting men"
                sizes="100vw"                
                quality={100}
                fill
                className="object-cover"
            />
            <div className="z-0 flex flex-col justify-between items-center gap-2 max-w-[1440px]
                            lg:flex-row lg:justify-between px-8 py-6 lg:px-[100px] lg:py-10">
                <h1 className="font-bold text-2xl text-white text-center
                                lg:text-5xl lg:text-left lg: text-balance lg:leading-relaxed">
                                    Join now and become a valued member of the NCKF community!
                </h1>
                <Button asChild size="lg" className="bg-white text-black hover:bg-white/80 font-semibold lg:text-lg">
                    <Link href="#">Join NCKF</Link>
                </Button>
            </div>
        </div>
    )
}

export default CallToAction