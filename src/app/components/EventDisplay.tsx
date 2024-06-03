import EventComponent from "./EventComponent"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    } from "@/components/ui/carousel"


const EventDisplay = () => {
    return (
        <Carousel className="w-2/3 sm:w-full max-w-sm lg:max-w-4xl xl:max-w-6xl 2xl:max-w-full">
            <CarouselContent>
                <CarouselItem className="lg:basis-1/2 xl:basis-1/3"><EventComponent /></CarouselItem>
                <CarouselItem className="lg:basis-1/2 xl:basis-1/3"><EventComponent /></CarouselItem>
                <CarouselItem className="lg:basis-1/2 xl:basis-1/3"><EventComponent /></CarouselItem>
                <CarouselItem className="lg:basis-1/2 xl:basis-1/3"><EventComponent /></CarouselItem>
                <CarouselItem className="lg:basis-1/2 xl:basis-1/3"><EventComponent /></CarouselItem>
                <CarouselItem className="lg:basis-1/2 xl:basis-1/3"><EventComponent /></CarouselItem>
                <CarouselItem className="lg:basis-1/2 xl:basis-1/3"><EventComponent /></CarouselItem>
                <CarouselItem className="lg:basis-1/2 xl:basis-1/3"><EventComponent /></CarouselItem>

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default EventDisplay