import OfficerComponent from "../../components/about/OfficerComponent";
import {officers, boardMembers, advisors} from "../../components/about/officers";

const OfficerSection = () => {
    return (
        <>
            {/* Officers Section */}
            <div className="bg-[#EEEEEE]">
            <div className="py-16 px-6 xl:px-[100px] xl:py-[120px] max-w-[1440px] mx-auto">
                <h1 className="font-bold text-3xl lg:text-5xl">Officers</h1>
                <div className="py-16 space-y-10 grid grid-cols-1 place-items-center md:grid md:grid-cols-2 md:space-y-0 md:gap-y-24 lg:grid-cols-3">
                    {
                        officers.map((officer) => (
                            <OfficerComponent key={officer.key} officers={officer} title={true}/>
                        ))
                    }
                </div>
            </div>
            </div>
            {/* Board Members Section */}
            <div className="py-16 px-6 xl:px-[100px] xl:py-[120px] max-w-[1440px] mx-auto">
                <h1 className="font-bold text-3xl lg:text-5xl">Board Members</h1>
                <div className="py-16 space-y-10 grid grid-cols-1 place-items-center md:grid md:grid-cols-2 md:space-y-0 md:gap-y-24 lg:grid-cols-3">
                    {
                        boardMembers.map((boardMember) => (
                            <OfficerComponent key={boardMember.key} officers={boardMember} title={false}/>
                        ))
                    }
                </div>
            </div>
            {/* Advisors Section */}
            <div className="bg-[#EEEEEE]">
            <div className="py-16 px-6 xl:px-[100px] xl:py-[120px] max-w-[1440px] mx-auto">
                <h1 className="font-bold text-3xl lg:text-5xl">Advisors</h1>
                <div className="py-16 space-y-10 grid grid-cols-1 place-items-center md:grid md:grid-cols-2 md:space-y-0 md:gap-y-24">
                    {
                        advisors.map((advisor) => (
                            <OfficerComponent key={advisor.key} officers={advisor} title={false}/>
                        ))
                    }
                </div>
            </div>
            </div>
        </>
    )
}

export default OfficerSection