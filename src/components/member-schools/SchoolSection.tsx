import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { dojos } from '../../components/member-schools/dojos'
import DojoContent from "../../components/member-schools/DojoContent"

const SchoolSection = () => {
    return (
        // Section and Layout
        <div className="flex items-center justify-center px-4 py-8 max-w-[1440px] mx-auto">
            <Tabs defaultValue="map" className="px-6 py-8 w-full">
                <TabsList className="grid w-full grid-cols-2 bg-[#CAD8E7]">
                    <TabsTrigger value="map">Map View</TabsTrigger>
                    <TabsTrigger value="list">List View</TabsTrigger>
                </TabsList>
                <TabsContent className="aspect-[9/16] md:aspect-square lg:aspect-video" value="map">
                    <iframe
                        src="https://www.google.com/maps/d/u/0/embed?mid=10-Q_5Q-mlyh8ABXUq0Ogkg-W2HVxkak&ehbc=2E312F&noprof=1"
                        width="100%"
                        height="100%">
                    </iframe>
                </TabsContent>
                <TabsContent className="flex flex-col justify-center items-center" value="list">
                    <Accordion type="single" className="w-full flex flex-col gap-4" collapsible>
                        <DojoContent dojos={dojos} />
                    </Accordion>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default SchoolSection
