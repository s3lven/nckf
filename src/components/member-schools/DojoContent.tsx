import {AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { SquareArrowOutUpRight } from "lucide-react"
import Link from "next/link"
import { Dojo } from "@/components/member-schools/dojos"

export default function DojoContent({dojos} : {dojos: Dojo[]}) {
    return (
        <>
            {dojos.map((dojo) => (
                <AccordionItem key={dojo.key} value={dojo.name} className="bg-[#CAD8E7] px-2 rounded-lg">
                    <AccordionTrigger className="text-left ">{dojo.name}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h1 className="font-medium">Locations and Times:</h1>
                            {
                                dojo.locations.map((location) => (
                                    <div key={location.key} className="flex flex-col gap-3">
                                        <h3 className="text-sm font-medium">{location.name}</h3>
                                        <ul className="list-disc list-inside">
                                            {
                                                location.time.map((time) => (
                                                    <li key="time">{time}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                        <Separator />
                        <div>
                            <h1 className="font-medium">Head Instructor</h1>
                            <ul className="list-disc list-inside">
                                <li>{dojo.headInstructor}</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-medium">Contact</h1>
                            <ul className="list-disc list-inside">
                                <li>{dojo.contactName} - {dojo.contactEmail}</li>
                            </ul>
                        </div>
                        <Button asChild variant={"link"} className="self-start flex justify-between px-0 gap-2">
                            <Link href={dojo.website}
                                rel="noopener noreferrer" target="_blank">
                                Website <SquareArrowOutUpRight />
                            </Link>
                        </Button>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </>
    )
}