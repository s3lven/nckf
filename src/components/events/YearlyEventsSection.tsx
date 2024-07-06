import { events } from "@/components/events/events"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const YearlyEventsSection = () => {
    return (
        // Section
        <div className="bg-[#EEEEEE]">
            {/* Layout */}
            <div className="flex flex-col gap-6 px-6 py-8 items-center justify-center max-w-[1440px] mx-auto
                            lg:px-[100px] lg:py-[120px]">
                <div className="self-start flex flex-col gap-2">
                    <h1 className="font-bold text-3xl lg:text-5xl">Yearly Events</h1>    
                    <p className="lg:text-xl">The NCKF hosts a variety of events, including tournaments, seminars, and community events. Dojos also have their own events that are local to their community. Please check their websites for more info.</p>
                </div>   
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {
                        events.map((event) => (
                            <Card key={event.title} className="bg-white border-none w-full">
                                <CardHeader>
                                    <div className="flex items-center space-x-4">
                                        {event.icon}
                                        <h3 className="text-xl font-bold">{event.title}</h3>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[#71717A] font-medium">
                                        {event.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default YearlyEventsSection