import { Calendar, School } from "lucide-react"
import { Card, CardContent, CardHeader } from "../ui/card"

const GodoKeikoSection = () => {
    return (
        // Section and Layout
        <div className="px-6 py-8 max-w-[1440px] mx-auto
                        flex flex-col items-center justify-center gap-6
                        lg:px-[100px] lg:py-[120px]">
            <div className="self-start flex flex-col gap-2">
                <h1 className="font-bold text-3xl lg:text-5xl">Godo Keiko</h1>
                <p className="lg:text-xl">Godo Keiko (good will practices) are federation-wide practices usually held on the first Sunday of each month.</p>
            </div>
            {/* General Schedule Card */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Card className="bg-white border-none w-full">
                    <CardHeader>
                        <div className="flex items-center space-x-4">
                            <Calendar color="#2F2DB7"/>
                            <h3 className="text-xl font-bold">General Schedule</h3>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-[#71717A] font-medium">
                            Iaido: 11:30am - 1:00pm<br />
                            Kata: 1:00pm - 1:45pm<br />
                            Kendo: 1:45pm - 4:00pm<br />
                            NCKF Board of Directors Meeting: 4:15pm - 5:30pm
                        </p>
                    </CardContent>
                </Card>
                {/* Location and Requirements Card */}
                <Card className="bg-white border-none w-full">
                    <CardHeader>
                        <div className="flex items-center space-x-4">
                            <School color="#2F2DB7" size={24}/>
                            <h3 className="text-xl font-bold">Location and Requirements</h3>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-[#71717A] font-medium">
                        Nichiren Buddhist Temple, 3570 Mona Way, San Jose, CA 95130<br /><br />
                        Participants are required to pay $5 in cash and must be members of the NCKF. If you are non-NCKF visiting, please contact us at kendoinfo@nckf.org.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default GodoKeikoSection

