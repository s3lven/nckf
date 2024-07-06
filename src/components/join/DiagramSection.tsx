import VerticalConnector from "../../../public/svg/vertical-connector"
import ReverseVerticaLConnector from "../../../public/svg/reverse-vertical-connector"

import { diagramContent } from "./joinContent"
import HorizontalConnector from "../../../public/svg/horizonal-connect"


const DiagramSection = () => {
    return (
        // Section and Layout
        <div className="px-6 py-8 max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-8
                        lg:px-[100px] lg:py-[120px]">
            <h1 className="text-3xl font-bold text-center">How to Join the NCKF</h1>    
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-0">
                {/* Vertical Diagram for Mobile/Tablet */}
                {
                    diagramContent.map((group) => (
                        <>
                            <div className={`flex gap-4 ${group.reverse && `flex-row-reverse`} justify-center items-center
                                            xl:flex-col`}>
                                {/* Icon Container */}
                                <div className="w-[105px] h-[105px] bg-primary/15 mix-blend-normal rounded-[30px]
                                                flex justify-center items-center flex-none">
                                    {group.icon}
                                </div>
                                <div className="flex flex-col gap-2 text-center flex-1 max-w-[420px]">
                                    <h1 className="font-semibold text-2xl">{group.title}</h1>
                                    <p className="text-sm leading-relaxed">{group.desc}</p>
                                </div>
                            </div>
                            {
                                group.connector && (
                                    <>
                                        <div className="flex justify-center xl:hidden">
                                            
                                            {!group.reverse ? <VerticalConnector /> : <ReverseVerticaLConnector />}
                                        </div>
                                        <div className="hidden xl:flex">
                                            <HorizontalConnector />
                                        </div>
                                    </>
                                ) 
                            }
                            
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default DiagramSection