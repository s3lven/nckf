import Image from "next/image"

const HistorySection = () => {
    return (
        // Section and Layout
        <div className="flex flex-col gap-16 px-6 py-8 xl:px-[100px] xl:py-[120px] max-w-[1440px] mx-auto">
            <h1 className="text-3xl font-bold lg:text-5xl">History</h1>
            <div className="flex flex-col gap-4 xl:grid xl:grid-cols-2">
                {/* Images */}
                <div className="flex justify-around items-center xl:flex-col xl:flex-1">
                    {/* NCKF */}
                    <div className="max-w-[175px] xl:max-w-[360px]">
                        <Image 
                                priority
                                src={"/images/nckf.jpg"}
                                width={600}
                                height={600}
                                alt="NCKF Logo"
                                className="aspect-square object-contain"
                        />
                    </div>
                    {/* AUSKF */}
                    <div className="max-w-[175px] xl:max-w-[360px]">
                        <Image 
                                priority
                                src={"/images/auskf.jpg"}
                                width={600}
                                height={600}
                                alt="NCKF Logo"
                                className="aspect-square object-contain"
                        />
                    </div>
                </div>
                {/* Content */}
                <p className="xl:text-lg">
                    Northern California has had a rich history of kendo since the first generation of
                    Japanese settlers came to California beginning in the late 1800&apos;s. The Northern
                    California Kendo Federation as it is known today, is the result of efforts by both
                    Japanese Americans and Americans of other ancestry after WWII.
                    <br /><br />
                    Today, the Northern California Kendo Federation is comprised of eleven kendo
                    dojo&apos;s located from Salinas to Sacramento, with the majority of the dojo&apos;s
                    being located around the San Francisco Bay area.
                    <br /><br />
                    The Northern California Kendo Federation is a <u>501(c)(3)</u> non-profit publicly
                    supported organization. All Dojo Shihan (chief Instructors) and instructors donate
                    their time and teach on a purely voluntary basis. Due to this, all affiliate NCKF
                    dojo&apos;s charge much less for instruction than comparable commercial martial arts studios.
                    <br /><br />
                    Affiliate NCKF dojos are all led by a ranking Shihan, or head instructor of at least an FIK/AUSKF
                    recognized 5th Dan or above. Those below 5th Dan are only allowed to be assistant instructors in
                    affiliate dojo&apos;s. This enables the NCKF to maintain a level of instruction which is needed to
                    promote kendo with a high degree of integrity.
                    <br /><br />
                    The Northern California Kendo Federation consistently places individuals, provides coaches,
                    and managers to Team USA (US National Team). New students are always welcome in all NCKF
                    dojo&apos;s. No previous martial arts experience is necessary, as all new students start at
                    the beginning.
                </p>

            </div>
        </div>
    )
}

export default HistorySection