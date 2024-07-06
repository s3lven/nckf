import {
    Accordion,
    AccordionItem,
    AccordionContent,
    AccordionTrigger 
} from "../ui/accordion"

const faqContent = [
    {
        question: "How do I join a dojo in the NCKF?",
        answer: "To join a dojo and the NCKF, you will have to pay fees and purchase a shinai from a kendo vendor. Please see the 'Join NCKF' page for more details."
    },
    {
        question: "What are the benefits of NCKF membership?",
        answer: "Having NCKF membership will entitle you to practices from recognized dojos within Northern California and access to promotional events for higher rank. Please see the 'Join NCKF' page for more details."
    },
    {
        question: "How often does the NCKF hold events?",
        answer: "The NCKF sponsors tournaments nearly every month at various dojos. There are also 'godo-keikos' that are held every month. Please see the 'Events' page for more details."
    },
    {
        question: "How can I get involved in the organization's activities beyond regular training?",
        answer: "Beyond regular training, you can volunteer in organizaing events, such as tournaments and seminars. Ask your local dojo and sensei for opportunities to contribute."
    },
]

const FAQSection = () => {
    return (
        // Section
        <div className="">
            {/* Layout */}
            <div className="flex flex-col gap-5 items-center max-w-[1440px] mx-auto py-8 px-6
                            lg:px-[100px] lg:py-[120px] lg:flex-row">
                {/* Header */}
                <h1 className="font-bold text-2xl lg:text-5xl">Frequently Asked Questions</h1>
                <Accordion type="single" collapsible className="flex flex-col gap-5 w-full">
                    {
                        faqContent.map((item) => (
                            <AccordionItem key={item.question} value={item.question} className="bg-[#CAD8E7] rounded-2xl p-4">
                                <AccordionTrigger className="text-left p-0 font-semibold lg:text-xl">{item.question}</AccordionTrigger>
                                <AccordionContent className="pt-4 text-base">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                        }
                </Accordion>
            </div>
        </div>
    )
}

export default FAQSection