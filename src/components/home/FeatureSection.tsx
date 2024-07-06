import { Trophy, School, HeartHandshake } from "lucide-react"
import { ReactNode } from "react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import Link from "next/link"

interface featureCard {
    icon: ReactNode,
    title: string,
    desc: string
}

const featureContent: featureCard[] = [
    {
        icon: <Trophy size={75} color="#2F2DB7" strokeWidth={0.75} />,
        title: "Organizing Tournaments",
        desc: "We sponsor an average of 12 tournaments throughout the year and participate in others throughout the country. These tournaments include the Northern California Kendo Championship, the yearly North South Tournament, and the AUSKF Nationals that is hosted every three years. These tournaments provide opportunities for kendo practitioners of all levels to test their skills and compete in a supportive environment.",
    },
    {
        icon: <School size={75} color="#2F2DB7" strokeWidth={0.75} />,
        title: "Promoting Kendo Education",
        desc: "Our federation regularly hosts seminars led by experienced instructors and visiting sensei. These events offer valuable learning experiences, allowing members to enhance their techniques, deepen their understanding of kendo, and connect with fellow practitioners.",
    },
    {
        icon:<HeartHandshake size={75} color="#2F2DB7" strokeWidth={0.75} />,
        title: "Fostering Community",
        desc: "At the heart of our federation is a vibrant community of kendo enthusiasts. Through social events, gatherings, and practices, we provide opportunities for members to connect, share experiences, and support each other on their kendo journey. We believe in fostering camaraderie and a sense of belonging among all who are passionate about kendo in Northern California.",
    },
]

const FeatureSection = () => {
    return (
        // Section
        <div className="py-8 px-6 bg-[#EEEEEE]">
            {/* Layout */}
            <div className="flex flex-col gap-8 items-center max-w-[1440px] mx-auto
                            lg:px-[100px] lg:py-[120px]">
                {/* Text */}
                <div className="text-center flex flex-col gap-4">
                    <h1 className="font-bold text-3xl lg:text-5xl">What We Do</h1>
                    <p className="font-normal text-base text-balance lg:text-xl">The NCKF is an non-profit organization dedicated to promoting and preserving the practice of kendo in Northern California. The NCKF typically oversees various activities related to kendo, including:</p>
                </div>
                {/* Cards */}
                <div className="flex flex-col gap-4 justify-center items-center
                                xl:flex-row xl:items-stretch">
                    {
                        featureContent.map((feature) => (
                            <Card key={feature.title} className="bg-white border-none w-full px-6 py-10">
                                <CardHeader>
                                    <div className="flex flex-col gap-5">
                                        {feature.icon}
                                        <h1 className="font-bold text-xl lg:text-2xl">{feature.title}</h1>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[#71717A] font-medium">
                                        {feature.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
                {/* Events Button */}
                <div>
                    <Button asChild className="font-semibold">
                        <Link href="/events">View Upcoming Events</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection