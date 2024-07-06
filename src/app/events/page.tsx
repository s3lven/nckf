import Header from "@/components/layout/Header"
import CalendarSection from "@/components/events/CalendarSection"
import YearlyEventsSection from "@/components/events/YearlyEventsSection"
import GodoKeikoSection from "@/components/events/GodoKeikoSection"
import CallToAction from "@/components/layout/CallToAction"


export default function Events () {
    return (
        <main>
            <Header 
                imageSrc="/images/kendo-background.jpg"
                alt="two kendoka hitting men"
                header="Events"
                desc="Check out our upcoming events, including tournaments, practices, and more!"
            />
            <CalendarSection />
            <YearlyEventsSection />
            <GodoKeikoSection />
            <CallToAction />
        </main>
    )
}