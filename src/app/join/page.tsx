import DiagramSection from "@/components/join/DiagramSection"
import EquipmentSection from "@/components/join/EquipmentSection"
import FeesSection from "@/components/join/FeesSection"
import Header from "@/components/layout/Header"

function JoinNCKF() {
    return (
        <main>
            <Header 
                imageSrc="/images/kendo-background.jpg"
                alt="two kendoka hitting men"
                header="Joining NCKF"
                desc="Learn about how to join our kendo community."
            />
            <DiagramSection />
            <FeesSection />
            <EquipmentSection />
        </main>
    )
}

export default JoinNCKF