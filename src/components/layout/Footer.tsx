import Image from "next/image"
import Link from "next/link"
import { Separator } from "../ui/separator"
import FooterLinkSection from "./FooterLinkSection"

interface FooterLink {
    name: string, href: string
}

export interface FooterLinks extends Array<FooterLink>{}

const aboutUsLinks: FooterLinks = [
    {name: 'About Us', href: '/about'},
    {name: 'Member Schools', href: '/member-schools'},
    {name: 'Joining NCKF', href: '/join'},
]

const linksLinks: FooterLinks = [
    {name: 'Events', href: '/events'},
    {name: 'Photos', href: '#'},
    {name: 'Resources', href: '#'},
]

const otherLinks: FooterLinks = [
    {name: 'Southern California Kendo Federation', href: 'https://www.eanet.com/sckf/'},
    {name: 'International Kendo Federation', href: 'https://www.kendo-fik.org/'},
    {name: 'Northern California Iaido Association', href: 'http://nckf.org/Iaido/'},
]

const Footer = () => {
    return (
        <footer className="px-6 py-8 xl:px-[100px] xl:py-6">
            <div className="max-w-[1440px] flex flex-col gap-4 mx-auto">
                {/* Main Footer */}
                <div className="flex flex-col gap-8
                                sm:grid sm:grid-cols-4 sm:grid-flow-row
                                lg:flex lg:flex-row lg:justify-between lg:items-center">
                    {/* NCKF */}
                    <div className="flex flex-col items-center justify-center
                                    sm:col-span-2 md:px-5">
                        <Image 
                                priority
                                src={"/images/nckf.jpg"}
                                width={100}
                                height={100}
                                alt="NCKF Logo"
                        />
                    </div>
                    {/* AUSKF */}
                    <div className="flex flex-col justify-center items-center
                                    sm:col-span-2 md:px-5">
                        <Image 
                                priority
                                src={"/images/auskf.jpg"}
                                width={100}
                                height={100}
                                alt="AUSKF Logo"
                        />
                        <p className="text-xs text-center">The NCKF is a member of the <br/>All United States Kendo Federation</p>
                    </div>
                    <div className="flex flex-col gap-4
                                    sm:flex sm:flex-row sm:col-span-4 sm:justify-around
                                    lg:flex-1">
                        {/* About Us */}
                        <FooterLinkSection name="NCKF" links={aboutUsLinks}/>
                        {/* Links */}
                        <FooterLinkSection name="Links" links={linksLinks}/>
                        {/* Other Federations */}
                        <FooterLinkSection name="Other Federations" links={otherLinks}/>
                    </div>
                </div>
                <Separator className="bg-black/10"/>
                {/* Secondary Footer */}
                <div className="text-[#71717A]">
                    <p className="text-xs">Copyright © 2024 Northern California Kendo Federation | All Rights Reserved | Privacy Policy</p>
                    <p className="text-xs">Website Designed by Eriz Sartiga</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer