import Header from "@/components/layout/Header";

import HistorySection from "@/components/about/HistorySection";
import OfficerSection from "@/components/about/OfficerSection";
import CallToAction from "@/components/layout/CallToAction";

export default function About() {
    return (
        <main>
            <Header 
                imageSrc="/images/kendo-background.jpg"
                alt="two kendoka hitting men"
                header="NCKF"
                desc="Our mission is to promote kendo by fostering discipline and respect in a welcoming and inclusive community."
            />
            <HistorySection />
            <OfficerSection />
            <CallToAction />
        </main>
    )
}