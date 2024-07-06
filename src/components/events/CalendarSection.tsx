import { Button } from "../ui/button"
import Link from "next/link"
import { ScrollText } from "lucide-react"

const CalendarSection = () => {
    return (
        // Section and Layout
        <div className="px-6 py-8 max-w-[1440px] mx-auto
                        flex flex-col items-center justify-center gap-6
                        lg:px-[100px] lg:py-[120px]">
            <div className="flex flex-col gap-2 self-start">
                <h1 className="font-bold text-3xl lg:text-5xl">Calendar</h1>
                <p className="lg:text-xl">Use our calendar tool to plan for upcoming events. An updated list of this year&apos;s events can also be found below.</p>                
            </div>
            <Button variant={"outline"} className="flex gap-2 bg-[#EEEEEE] border-primary text-primary" asChild>
                <Link
                    href="http://nckf.org/Downloads/2024_NCKF_Schedule.pdf"
                >
                    <ScrollText size={20}/>
                    Full List of Events
                </Link>
            </Button>
            <iframe
                src="http://www.google.com/calendar/embed?src=nckf.web%40gmail.com&ctz=America/Los_Angeles"
                className="aspect-square w-full lg:aspect-video"
            >
            </iframe>
        </div>
    )
}

export default CalendarSection