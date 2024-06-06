import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Link from "next/link"

import { events } from "@/components/events/events"
import { ScrollText } from "lucide-react"


export default function Events () {
    return (
        <main className="max-w-[1440px] mx-auto">
            <div className="flex flex-col items-center justify-center pt-16 px-6 gap-8">
                <div className="self-start">
                    <h1 className="font-bold text-3xl">Events</h1>
                    <p className="pt-2">
                        Check out our upcoming events, including tournaments, practices, and more!
                    </p>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-5">
                    <Link
                        href="http://nckf.org/Downloads/2024_NCKF_Schedule.pdf"
                        rel="noopener noreferrer" target="_blank"
                    >
                        <Button variant={"outline"} className="flex gap-2">
                            <ScrollText />
                            Full List of Events
                        </Button>
                    </Link>
                    <iframe
                        src="http://www.google.com/calendar/embed?src=nckf.web%40gmail.com&ctz=America/Los_Angeles"
                        className="aspect-square w-full md:w-2/3"
                    >
                    </iframe>
                </div>
                <Separator className=""/>
                <div className="self-start flex flex-col w-full gap-4">
                    <h1 className="font-bold text-3xl self-start">Yearly Events</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 self-center py-6">
                        {
                            events.map((event) => (
                                <Card key={event.title} className="max-w-[400px]">
                                    <CardHeader>
                                        <div className="flex items-center space-x-4">
                                            {event.icon}
                                            <h3 className="text-xl font-bold">{event.title}</h3>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p>
                                            {event.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>

        </main>
    )
}