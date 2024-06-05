import Image from "next/image";
import OfficerComponent from "../../components/about/OfficerComponent";
import {officers, boardMembers, advisors} from "../../components/about/officers";

export default function About() {
    return (
        <main className="max-w-[1440px] mx-auto">
            {/* About Section */}
            <div className="py-16 px-6">
                <h1 className="font-bold text-3xl">About Us</h1>
                <div className="md:grid md:grid-cols-2">
                    <div className="grid grid-cols-2 py-8 place-items-center md:grid-cols-none md:grid-rows-2">
                        <div className="">
                            <Image
                                className="object-contain" 
                                priority
                                src="/images/nckf.jpg"
                                width={200}
                                height={200}
                                alt="nckf logo"
                                sizes="(min-width: 480px) 200px, calc(46.25vw - 13px)"
                            />
                        </div>
                        <div className="">
                            <Image
                                className="object-contain" 
                                priority
                                src="/images/auskf.jpg"
                                width={200}
                                height={200}
                                alt="auskf logo"
                                sizes="(min-width: 480px) 200px, calc(46.25vw - 13px)"
                            />
                        </div>
                    </div>
                    <div>
                        <p>
                            Northern California has had a rich history of kendo since the first generation of
                            Japanese settlers came to California beginning in the late 1800&apos;s. The Northern
                            California Kendo Federation as it is known today, is the result of efforts by both
                            Japanese Americans and Americans of other ancestry after WWII.
                        </p>
                        <br />
                        <p>
                            Today, the Northern California Kendo Federation is comprised of eleven kendo
                            dojo&apos;s located from Salinas to Sacramento, with the majority of the dojo&apos;s
                            being located around the San Francisco Bay area.
                        </p>
                        <br />
                        <p>
                            The Northern California Kendo Federation is a <u>501(c)(3)</u> non-profit publicly
                            supported organization. All Dojo Shihan (chief Instructors) and instructors donate
                            their time and teach on a purely voluntary basis. Due to this, all affiliate NCKF
                            dojo&apos;s charge much less for instruction than comparable commercial martial arts studios.
                        </p>
                        <br />
                        <p>
                            Affiliate NCKF dojos are all led by a ranking Shihan, or head instructor of at least an FIK/AUSKF
                            recognized 5th Dan or above. Those below 5th Dan are only allowed to be assistant instructors in
                            affiliate dojo&apos;s. This enables the NCKF to maintain a level of instruction which is needed to
                            promote kendo with a high degree of integrity.
                        </p>
                        <br />
                        <p>
                            The Northern California Kendo Federation consistently places individuals, provides coaches,
                            and managers to Team USA (US National Team). New students are always welcome in all NCKF
                            dojo&apos;s. No previous martial arts experience is necessary, as all new students start at
                            the beginning.
                        </p>
                    </div>
                </div>
            </div>
            {/* Officers Section */}
            <div className="py-16 px-6">
                <h1 className="font-bold text-3xl">Officers</h1>
                <div className="py-12 space-y-10 grid grid-cols-1 place-items-center md:grid md:grid-cols-2 md:space-y-0 md:gap-y-24 lg:grid-cols-3">
                    {
                        officers.map((officer) => (
                            <OfficerComponent key={officer.key} officers={officer} title={true}/>
                        ))
                    }
                </div>
            </div>
            {/* Board Members Section */}
            <div className="py-16 px-6">
                <h1 className="font-bold text-3xl">Board Members</h1>
                <div className="py-12 space-y-10 grid grid-cols-1 place-items-center md:grid md:grid-cols-2 md:space-y-0 md:gap-y-24 lg:grid-cols-3">
                    {
                        boardMembers.map((boardMember) => (
                            <OfficerComponent key={boardMember.key} officers={boardMember} title={false}/>
                        ))
                    }
                </div>
            </div>
            {/* Advisors Section */}
            <div className="py-16 px-6">
                <h1 className="font-bold text-3xl">Advisors</h1>
                <div className="py-12 space-y-10 grid grid-cols-1 place-items-center md:grid md:grid-cols-2 md:space-y-0 md:gap-y-24">
                    {
                        advisors.map((advisor) => (
                            <OfficerComponent key={advisor.key} officers={advisor} title={false}/>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}