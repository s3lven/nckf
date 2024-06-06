import Image from "next/image"
import Link from "next/link"
import FooterLinks from "./FooterLinks"
import { Separator } from "../ui/separator"

interface Link {
    name: string, href: string
}

export interface Links extends Array<Link>{}

const aboutUsLinks: Links = [
    {name: 'Board Members', href: '#'},
    {name: 'Member Schools', href: '#'},
    {name: 'Fees', href: '#'},
]

const linksLinks: Links = [
    {name: 'Photos', href: '#'},
    {name: 'Page', href: '#'},
    {name: 'Pages', href: '#'},
]

const otherLinks: Links = [
    {name: 'SCKF', href: '#'},
    {name: 'IKF', href: '#'},
    {name: 'NCIA', href: '#'},
]

const Footer = () => {
    return (
        <footer className="py-20 max-w-[1440px] mx-auto px-6">
            <Separator />
            <div className="flex flex-col items-center py-6
                            lg:flex-row lg:items-stretch">
                {/* NCKF, AUSKF, and Copyright */}
                <div className="grid grid-cols-2 justify-items-center items-center gap-2 lg:w-1/2">
                    <div className="max-w-[100px]">
                        <Image 
                            priority
                            src={"/images/nckf.jpg"}
                            width={100}
                            height={100}
                            alt="NCKF Logo"
                        />
                    </div>
                    <div className="max-w-[100px]">
                        <Image 
                            priority
                            src={"/images/auskf.jpg"}
                            width={100}
                            height={100}
                            alt="AUSKF Logo"
                        />
                    </div>
                    <h1 className="text-balance text-center text-xs col-span-2 lg:col-span-1 lg:order-last">The NCKF is a member of the All United States Kendo Federation</h1>
                    <h1 className="text-balance text-center text-xs col-span-2 lg:col-span-1">© Copyright 2024 NCKF. All Rights Reserved.</h1>
                </div>
                <Separator className="my-6 lg:hidden"/>
                {/* Links */}
                <div className="mx-auto lg:flex-1 lg:grid lg:grid-cols-3">
                    <FooterLinks name={'NCKF'} links={aboutUsLinks} last={false} />
                    <FooterLinks name={'Links'} links={linksLinks} last={false}/>
                    <FooterLinks name={'Other Federations'} links={otherLinks} last={true}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer