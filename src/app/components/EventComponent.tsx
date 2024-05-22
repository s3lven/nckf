import Image from "next/image"
import Link from "next/link"


const EventComponent = () => {
    return (
        <Link href={'#'}>
            <div className="flex flex-col max-w-[410px] h-[512px] relative border-[1.5px] border-black">
                <div className="relative h-[200px]">
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
                </div>
                <div className="bg-white absolute top-2 right-2 text-center p-2 drop-shadow-sm">
                    <p className="text-xs">Fri</p>
                    <h1 className="font-bold text-2xl">09</h1>
                    <p className="text-xs">Feb 2024</p>
                </div>
                <div className="flex flex-col flex-1 justify-start items-start px-2 py-5 gap-2 ">
                    <p className="bg-gray-300 text-xs p-1">Category</p>
                    <h1 className="text-2xl font-bold">Exciting Event</h1>
                    <p className="text-xs">Location</p>
                    <p className="text-sm text-pretty">Join us at this upcoming Federation event for a thrilling kendo event.</p>
                </div>
                <button className="text-black text-xs w-fit self-end px-2 py-3">See Details {">"}</button>
            </div>
        </Link>
    ) 
}

export default EventComponent
