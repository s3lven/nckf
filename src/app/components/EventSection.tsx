import EventDisplay from "./EventDisplay"


const EventSection = () => {
    return (
        <div className="py-10 flex flex-col justify-center items-center max-w-[1440px] mx-auto gap-5">
            <div className="flex flex-col justify-center lg:items-start lg:self-stretch gap-5 lg:gap-2 mx-5 py-5">
                <h3 className="text-center font-semibold text-lg md:text-xl">Discover</h3>
                <h1 className="text-center font-semibold text-3xl md:text-5xl">Upcoming Events</h1>
                <div className="text-balance text-sm md:text-lg flex flex-col lg:flex-row lg:justify-between lg:w-full items-center gap-5">
                    <p className="text-center">Attend our monthly good-will practices, tournaments, seminars, and more!</p>
                    <button className="w-[100px] h-[50px] border-solid text-black border-2 bg-white shadow-sm">See All</button>
                </div>
            </div>
            <EventDisplay />
        </div>
    )
}

export default EventSection