import { Shield, Shirt, Sword } from "lucide-react"
import { Card, CardContent, CardHeader } from "../ui/card"


const EquipmentSection = () => {
    return (
        // Section and Layout
        <div className="px-6 py-8 max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-8 lg:px-[100px] lg:py-[120px]">
            {/* Title and Description */}
            <div className="self-start flex flex-col gap-2">
                    <h1 className="text-3xl font-bold">Equipment</h1>
                    <p className="lg:text-xl">In Kendo, practitioners use a wide range of equipment to ensure safety and adherence to tradition and learning. These equipment should be purchased from a trusted kendo vendor. Here are some of the essential items needed:</p>                    
                </div>
                {/* Cards */}
                <div className="flex flex-col gap-4 justify-center items-center
                                xl:flex-row xl:items-stretch">
                    <Card className="bg-white border-none w-full px-8 py-12">
                        <CardHeader className="p-0">
                            <div className="flex flex-col gap-5">
                                <Sword size={75} color="#2F2DB7" strokeWidth={0.75} />
                                <h1 className="font-bold text-2xl lg:text-3xl">Shinai and Bokuto</h1>
                            </div>
                        </CardHeader>
                        <CardContent className="px-0 py-6">
                            <div className="text-[#71717A] font-medium">
                                <p>
                                Shinai (竹刀) are bamboo swords used for practice and competition. It is designed to simulate a real sword while minimizing the risk of injury. Shinai may require maintenance often to minimize injury.
                                <br /><br />
                                Bokuto (木刀) are woden swords used for kata (pre-arranged forms) practice.
                                <br /><br />
                                Shinai bags are required for carrying both shinai and bokken, as they are considered blunt weapons.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-white border-none w-full px-8 py-12">
                        <CardHeader className="p-0">
                            <div className="flex flex-col gap-5">
                                <Shirt size={75} color="#2F2DB7" strokeWidth={0.75} />
                                <h1 className="font-bold text-2xl lg:text-3xl">Uniform</h1>
                            </div>
                        </CardHeader>
                        <CardContent className="px-0 py-6">
                            <div className="text-[#71717A] font-medium">
                                <p>
                                    The uniform consists of:                                    
                                    <br /><br />
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Keikogi (稽古着): Traditional training jacket, usually made of cotton.</li>
                                    <li>Hakama (袴): Traditional pleated trousers that are worn over the keikogi.</li>
                                </ul>
                                <br />
                                <p>A Tenugui (手拭い) -- a cotton towel worn under the men -- should also be purchased with the uniform to practice putting on.</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-white border-none w-full px-8 py-12">
                        <CardHeader className="p-0">
                            <div className="flex flex-col gap-5">
                                <Shield size={75} color="#2F2DB7" strokeWidth={0.75} />
                                <h1 className="font-bold text-2xl lg:text-3xl">Bogu Set</h1>
                            </div>
                        </CardHeader>
                        <CardContent className="px-0 py-6">
                            <div className="text-[#71717A] font-medium">
                            <p>
                                Bogu (防具) is the protective armor worn by practitioners, which include:                                    
                                <br /><br />
                            </p>
                            <ul className="list-disc list-inside">
                                <li>Men (面): Helmet that protects the head, face, and throat.</li>
                                <li>Kote (小手): Gloves that protect the hands and wrists.</li>
                                <li>Do (胴): Chest protector</li>
                                <li>Tare (垂れ): Waist protector</li>
                                <li>Zekken: Name tag worn on the tare to display a member’s name and dojo affiliation.</li>
                            </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
        </div>
    )
}

export default EquipmentSection