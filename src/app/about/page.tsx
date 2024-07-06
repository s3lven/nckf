import AboutHeader from "@/components/about/AboutHeader";
import HistorySection from "@/components/about/HistorySection";
import OfficerSection from "@/components/about/OfficerSection";
import CallToAction from "@/components/layout/CallToAction";

export default function About() {
    return (
        <main>
            <AboutHeader />
            <HistorySection />
            <OfficerSection />
            <CallToAction />
        </main>
    )
}