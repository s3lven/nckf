import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowBigUpDash, Dumbbell, Earth, Hospital, NotebookPen, Trophy } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface entitle {
    icon: ReactNode,
    title: string,
    desc: string,
}

const entitleList: entitle[] = [
    {   icon: <Dumbbell />,
        title: "Practice",
        desc: "Kendo instruction and practice (for certain level player, it is agreed to join other Kendo Dojo's practice without additional fee. Please contact each local Kendo Dojo for details.)"
    },
    {   icon: <Hospital />,
        title: "Insurance",
        desc: "AUSKF Insurance"
    },
    {   icon: <NotebookPen />,
        title: "Seminars",
        desc: "Access to AUSKF and other local seminars, such as shinpan seminars, etc."
    },
    {   icon: <ArrowBigUpDash />,
        title: "Shinsa",
        desc: "Access to Kendo promotion events*"
    },
        {icon: <Trophy />,
        title: "Tournaments",
        desc: "Access to tournaments from AUSKF and AUSKF affiliates*"
    },
]

export default function Fees () {
    return (
        <main className="max-w-[1440px] mx-auto">
            <div className="flex flex-col items-center justify-center pt-16 px-6 gap-8">
                <div className="self-start">
                    <h1 className="font-bold text-2xl ">Fees</h1>
                    <p className="pt-2">
                        To practice Kendo, there are three levels of fees which have to be paid at your local dojo:
                    </p>
                </div>
                <div className="flex flex-col gap-4 md:flex-row">
                    <Card className="w-full md:w-1/3">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-4">
                                <Earth />
                                <p>AUSKF Fee</p>
                            </CardTitle>
                            <CardDescription>To participate in the US</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-[circle] list-inside">
                                <li>$60 per year for Adults</li>
                                <li>$30 per year for 17 years and under</li>
                                <li>$30 per year for full time students</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="w-full md:w-1/3">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-4">
                                <Earth />
                                <p>NCKF Fee</p>
                            </CardTitle>
                            <CardDescription>To participate within Northern California</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-[circle] list-inside">
                                <li>$40 per year for Adults</li>
                                <li>$40 per year for 17 years and under <b>with</b> yudansha rank</li>
                                <li>$30 per year for 17 years and under <b>without</b> yudansha rank</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="w-full md:w-1/3">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-4">
                                <Earth />
                                <p>Dojo Fee</p>
                            </CardTitle>
                            <CardDescription>To participate at your local dojo</CardDescription>
                        </CardHeader>
                        <CardContent>
                            Fee Varies by dojo. Each NCKF dojo sets their own fee schedules (annually, 
                            semi-anually, monthly), so please contact the dojo if you are interested in attending.
                        </CardContent>
                        <CardFooter>
                            <Button variant={"outline"} asChild>
                                <Link href="/member-schools" >
                                    Explore Dojos
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <Separator />
                <div className="w-full flex flex-col justify-center items-center">
                    <h1 className="font-bold text-2xl self-start">
                        What do these fees entitle me to?
                    </h1>
                    <div className="grid grid-cols-1 gap-4 self-center py-6 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-max">
                        {
                            entitleList.map((entitle) => (
                                <Card key={entitle.title} className="max-w-[400px]">
                                    <CardHeader>
                                        <div className="flex items-center space-x-4">
                                            {entitle.icon}
                                            <h3 className="text-xl font-bold">{entitle.title}</h3>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p>
                                            {entitle.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </div>
                </div>
                <div className="self-start">
                    <p className="text-xs">*: Please note that certain activities may require event-specific fees</p>
                </div>
            </div>
        </main>
    )
}