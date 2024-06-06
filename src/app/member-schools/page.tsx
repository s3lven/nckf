
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { dojos } from '../../components/member-schools/dojos'
import DojoContent from "./DojoContent"

export default function MemberSchools() {
    return (
        <main className="max-w-[1440px] mx-auto">
            <div className="flex flex-col items-center justify-center py-16 px-6">
                <h1 className="font-bold text-3xl self-start">Member Schools</h1>
                <Tabs defaultValue="map" className="py-8 px-6 w-full max-w-[1440px]">
                    <TabsList className="grid w-full grid-cols-2">
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
                        <Accordion type="single" className="w-full max-w-screen-lg " collapsible>
                            <DojoContent dojos={dojos} />
                        </Accordion>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}