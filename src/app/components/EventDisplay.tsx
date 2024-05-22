import EventComponent from "./EventComponent"


const EventDisplay = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-5 mx-5">
            <EventComponent />
            <EventComponent />
            <EventComponent />
        </div>
    )
}

export default EventDisplay