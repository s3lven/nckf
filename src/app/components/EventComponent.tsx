import Image from "next/image"
import Link from "next/link"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const EventComponent = () => {
    return (
        <Card className="max-h-[600px] flex flex-col overflow-hidden">
            <CardHeader className="relative">
                <div className="relative w-full h-[250px]">
                    <Image 
                        src="/images/kendo-background.jpg"
                        alt="background image of two kendoka hitting men"
                        sizes="100vw"
                        quality={100}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="bg-white absolute top-10 right-10 text-center p-2 drop-shadow-sm aspect-square">
                    <p className="text-xs">Fri</p>
                    <h1 className="font-bold text-2xl">09</h1>
                    <p className="text-xs">Feb 2024</p>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2.5 overflow-hidden">
                <Badge variant="secondary" className="self-start text-base">Category</Badge>
                <h1 className="font-bold text-2xl">Event Title</h1>
                <p className="font-bold text-base">Location</p>
                <p className="text-ellipsis">Join us at this upcoming Federation event for a thrilling kendo event event event event event event event event event event event event event event event event event event event event event event event event event event event event event event event event event event event event event event event event event event </p>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button variant={"outline"} asChild>
                    <Link href="#" className="text-right">More Details</Link>
                </Button>
            </CardFooter>
        </Card>
    )   
}

export default EventComponent
