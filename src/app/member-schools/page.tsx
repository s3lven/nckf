
import CallToAction from "@/components/layout/CallToAction"
import Header from "@/components/layout/Header"
import SchoolSection from "@/components/member-schools/SchoolSection"

export default function MemberSchools() {
    return (
        <main>
            <Header 
                imageSrc="/images/kendo-background.jpg"
                alt="two kendoka hitting men"
                header="Member Schools"
                desc="Discover a NCKF dojo near you!"
            />
            <SchoolSection />
            <CallToAction />
        </main>
    )
}