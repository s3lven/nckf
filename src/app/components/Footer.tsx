import Image from "next/image"
import Link from "next/link"
import FooterLinks from "./FooterLinks"

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
    {name: 'All US Kendo Federation', href: '#'},
    {name: 'International Kendo Federation', href: '#'},
    {name: 'Northern California Iaido Association', href: '#'},
]

const Footer = () => {
    return (
        <div className="py-20 max-w-[1440px] mx-auto">
            <hr className="mx-5"/>
            <div className="pt-6 flex flex-col lg:grid lg:grid-cols-6">
                {/* NCKF and Social Media Icons */}
                <div className="flex flex-col items-center justify-around py-6 gap-6 lg:py-0 lg:gap-0">
                    <Image 
                        priority
                        src={"/images/nckf.jpg"}
                        width={100}
                        height={100}
                        alt="NCKF Logo"
                    />
                    <div className="text-sm hidden lg:flex lg:justify-center gap-2">
                        <Image 
                            priority
                            src={'/icons/facebook-icon.svg'}
                            width={24}
                            height={24}
                            alt="Facebook Icon"
                            className="aspect-[1/1] h-[40px]"
                        />
                        <Image 
                            priority
                            src={'/icons/mail-icon.svg'}
                            width={24}
                            height={24}
                            alt="Mail Icon"
                            className="aspect-[1/1] h-[40px]"
                        />
                    </div>
                </div>
                {/* AUSKF Logo and Text */}
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        priority
                        src={"/images/auskf.jpg"}
                        width={100}
                        height={100}
                        alt="AUSKF Logo"
                    />
                    <h1 className="text-balance text-center text-sm">The NCKF is a member of the All United States Kendo Federation</h1>
                </div>
                <hr className="my-6 mx-5 lg:hidden"/>
                {/* Links */}
                <div className="sm:mx-auto lg:col-span-4 lg:grid lg:grid-cols-3">
                    <FooterLinks name={'About Us'} links={aboutUsLinks} last={false} />
                    <FooterLinks name={'Links'} links={linksLinks} last={false}/>
                    <FooterLinks name={'Other Federations'} links={otherLinks} last={true}/>
                </div>
            </div>
        </div>
    )
}

export default Footer