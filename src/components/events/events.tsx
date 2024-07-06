import { ArrowBigUpDash, Calendar, Dumbbell, NotebookPen, Sun, Trophy } from "lucide-react"
import { ReactNode } from "react"



interface FederationEvent {
    icon: ReactNode
    title: string
    desc: string
}

const events: FederationEvent[] = [
    {
        icon: <Trophy color="#2F2DB7"/>,
        title: "Tournaments",
        desc: "Experience the thrill of a Kendo taikai, where competitors from all dojos showcase their skills and compete for medals and trophies.",
    },
    {
        icon: <Calendar color="#2F2DB7"/>,
        title: "Godo Keiko",
        desc: "Join us on the first Sunday of each month for mass practice with other federation members. Attendance is $5 per month.",
    },
    {
        icon: <ArrowBigUpDash color="#2F2DB7"/>,
        title: "Shinsa",
        desc: "Showcase your proficiency and understanding of Kendo in front of Sensei to receive feedback and progress in rank.",
    },
    {
        icon: <Sun color="#2F2DB7"/>,
        title: "Summer Camp",
        desc: "Experience the thrill of Kendo tournaments, where competitors from all dojos showcase their skills and compete for medals and trophies.",
    },
    {
        icon: <NotebookPen color="#2F2DB7"/>,
        title: "Seminars",
        desc: "Experience the thrill of Kendo tournaments, where competitors from all dojos showcase their skills and compete for medals and trophies.",
    },
    {
        icon: <Dumbbell color="#2F2DB7"/>,
        title: "Kyouka Renshu",
        desc: "Experience the thrill of Kendo tournaments, where competitors from all dojos showcase their skills and compete for medals and trophies.",
    },
]

export {events}
