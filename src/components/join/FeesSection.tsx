import { Building2, Earth, School } from "lucide-react"
import { Card, CardContent, CardHeader } from "../ui/card"

const FeesSection = () => {
    return (
        // Section
        <div className="bg-[#EEEEEE]">
            {/* Layout */}
            <div className="px-6 py-8 max-w-[1440px] mx-auto
                            flex flex-col justify-content items-center gap-4
                            lg:px-[100px] lg:py-[120px]">
                {/* Title and Description */}
                <div className="self-start flex flex-col gap-2">
                    <h1 className="text-3xl font-bold">Fees</h1>
                    <p className="lg:text-xl">There are three levels of fees that must be paid to join the NCKF. These fees must be paid to your dojo.</p>                    
                </div>
                {/* Cards */}
                <div className="flex flex-col gap-4 justify-center items-center
                                xl:flex-row xl:items-stretch">
                    <Card className="bg-white border-none w-full px-8 py-12">
                        <CardHeader className="p-0">
                            <div className="flex flex-col gap-5">
                                <Earth size={75} color="#2F2DB7" strokeWidth={0.75} />
                                <h1 className="font-bold text-2xl lg:text-3xl">AUSKF Fee</h1>
                            </div>
                        </CardHeader>
                        <CardContent className="px-0 py-6">
                            <div className="text-[#71717A] font-medium">
                                <p>
                                    An annual fee that entitles a member to insurance, recognition of rank by the Federation, and access to events throughout the United States.
                                    <br /><br />
                                    All United States Kendo Federation Fee:
                                    <br />
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>$60 per year for adults.</li>
                                    <li>$30 per year for 17 years and under.</li>
                                    <li>$30 per year for full-time students.</li>
                                </ul>
                                <br />
                                <p>This fee is by the year and not prorated.</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-white border-none w-full px-8 py-12">
                        <CardHeader className="p-0">
                            <div className="flex flex-col gap-5">
                                <Building2 size={75} color="#2F2DB7" strokeWidth={0.75} />
                                <h1 className="font-bold text-2xl lg:text-3xl">NCKF Fee</h1>
                            </div>
                        </CardHeader>
                        <CardContent className="px-0 py-6">
                            <div className="text-[#71717A] font-medium">
                                <p>
                                    An annual fee that entitles members to practice from recognized dojos within Northern California and access to promotions for higher rank.                                    
                                    <br /><br />
                                    Northern California Kendo Federation Fee:
                                    <br />
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>$40 per year for adults.</li>
                                    <li>$40 per year for 17 years and under with Yudansha rank.</li>
                                    <li>$30 per year for 17 years and under with Kyu/No rank.</li>
                                </ul>
                                <br />
                                <p>This fee is by the year and not prorated.</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-white border-none w-full px-8 py-12">
                        <CardHeader className="p-0">
                            <div className="flex flex-col gap-5">
                                <School size={75} color="#2F2DB7" strokeWidth={0.75} />
                                <h1 className="font-bold text-2xl lg:text-3xl">Dojo Fee</h1>
                            </div>
                        </CardHeader>
                        <CardContent className="px-0 py-6">
                            <div className="text-[#71717A] font-medium">
                                <p>
                                Each NCKF Dojo sets their own fee schedules (monthly, semi-annually, annually), so you will need to visit the website or contact the dojo you are interested in attending. 
                                <br /><br />
                                This fee recognizes this person as a member of their dojo and may require permission to practice at other dojos. Please check with your Sensei and Sensei of the dojo you’re visiting for more information.  
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default FeesSection