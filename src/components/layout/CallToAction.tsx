import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

const CallToAction = () => {
    return (
        <div className="relative overflow-hidden flex flex-col justify-center items-center px-8 py-6 
                        lg:px-[100px] lg:py-[100px]">
            <Image 
                src="/images/kendo-background.jpg"
                alt="background image of two kendoka hitting men"
                sizes="100vw"                
                quality={100}
                fill
                className="object-cover"
            />
            <div className="z-0 flex flex-col items-center gap-2
                            lg:flex-row lg:justify-between">
                <h1 className="font-bold text-2xl text-white text-center
                                lg:text-5xl lg:text-left text-balance lg:leading-relaxed">
                                    Join now and become a valued member of the NCKF community!
                </h1>
                <Button asChild className="bg-white text-black hover:bg-white/80 font-semibold
                                            lg:text-2xl px-6 py-8">
                    <Link href="#">Join NCKF</Link>
                </Button>
            </div>
        </div>
    )
}

export default CallToAction