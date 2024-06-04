
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const dojos = [
    {
        key: 0,
        name: "Hokka Sen Shin Kai (HSSK)",
        
    }
]

export default function MemberSchools() {
    return (
        <div>
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
                        <TabsContent value="list">
                            <Accordion type="single" className="" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="">Hokka Sen Shin Kai (HSSK)</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4">
                                        <h1 className="font-medium">Locations and Times:</h1>
                                        <div className="flex flex-col gap-3">
                                            <h3 className="text-sm">Milpitas Community Center</h3>
                                            <ul className="list-disc list-inside">
                                                <li>WED: 5:30 - 8:30pm</li>
                                            </ul>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    )
}