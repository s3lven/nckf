import { ReactNode } from "react";
import { HandCoins, PartyPopper, School } from "lucide-react"

interface content {
    icon: ReactNode
    title: string
    desc: string
    reverse?: boolean
    connector? : boolean
}

const diagramContent: content[] = [
    {
        icon: <School color="#2F2DB7" size={50} className="mix-blend-multiply"/>,
        title:"Choose a Dojo",
        desc: "Visit a nearby dojo and watch one of their practices. If you're interested, ask Sensei on how to get started.",
        connector: true
    },
    {
        icon: <HandCoins color="#2F2DB7" size={50} className="mix-blend-multiply"/>,
        title:"Pay the Fees",
        desc: `Pay the AUSKF and NCKF fees, as well as any dojo fees. Purchase equipment such as a shinai or bokuto.`,
        reverse: true,
        connector: true
    },
    {
        icon: <PartyPopper color="#2F2DB7" size={50} className="mix-blend-multiply"/>,
        title:"Connect and Learn",
        desc: "Attend  events and  connect with fellow NCKF members in tournaments, seminars, promotions, and more!",
        connector: false,
    },
]

export { diagramContent }