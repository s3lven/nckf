import Image from "next/image"
import LinkButton from "./LinkButton"

const IntroductionSection = () => {
    return (
        <div className="flex flex-row flex-wrap h-full justify-center items-center py-6 ">
            <div className="mx-5 py-5 flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-10 rounded-xl">
                <div className="flex flex-col items-center md:items-start justify-center gap-5 max-w-[480px]">
                    <h2 className="text-lg md:text-xl font-semibold">Introduction</h2>
                    <h1 className="text-3xl md:text-5xl font-semibold">What Is Kendo?</h1>
                    <p className="text-sm text-center md:text-left">Kendo is a traditional Japanese martial art that focuses on discipline, 
                        respect, and self-improvement. Through rigorous training and practice, 
                        practitioners develop physical strength, mental resilience, and a deep 
                        understanding of Japanese culture.
                    </p>
                    <div>
                        <LinkButton route={"/about"} content={"Learn More"} transparent={false}/>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image 
                        src={"/images/kendo-background.jpg"}
                        alt="background image of two kendoka hitting men"
                        quality={100}
                        width={630}
                        height={630}
                        className="aspect-[1/1] object-cover object-right rounded-2xl xl:max-w-[630px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default IntroductionSection