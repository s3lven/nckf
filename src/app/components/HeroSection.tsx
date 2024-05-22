import Image from "next/image"
import Link from "next/link"
import LinkButton from "./LinkButton"

const HeroSection = () => {
    return (
        <div className="relative h-[80vh] flex flex-row overflow-hidden justify-around">
            <Image 
                src="/images/kendo-background.jpg"
                alt="background image of two kendoka hitting men"
                sizes="100vw"
                quality={100}
                fill
                style={{
                    objectFit: 'cover',
                }}
            />
            <div className="w-1/2 lg:w-1/3 h-full flex flex-col justify-center gap-5 z-0 text-center md:text-left text-balance">
                <h1 className="text-3xl md:text-6xl text-white font-bold">Northern California <br />Kendo Federation</h1>
                <p className=" md:text-xl text-white font-light">Experience the discipline and spirit of Kendo. Train with skilled instructors and become a master of the sword.</p>
                <div className="flex flex-row gap-2 text-white flex-wrap justify-center md:justify-start">
                    <LinkButton route={"/dojos"} content={"Explore Dojos"} transparent={false}/>
                    <LinkButton route={"/about"} content={"Learn More"} transparent={true} />
                </div>
            </div>
            <span className="hidden md:block"></span>
        </div>
    )
}

export default HeroSection