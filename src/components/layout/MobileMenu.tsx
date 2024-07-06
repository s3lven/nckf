"use client"

import { Menu } from "lucide-react"
import { useMediaQuery } from "../../hooks/use-media-query"
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer"
import Link from "next/link"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"

const mobileLinks = [
    {name: 'Home', href: '/'},
    {name: 'About Us', href: '/about'},
    {name: 'Schools', href: '/member-schools'},
    {name: 'Events', href: '/events'},
    {name: 'Photos', href: '#'},
    {name: 'Resources', href: '#'},
]

const MobileMenu = () => {
    const isDesktop = useMediaQuery("(min-width: 640px)")

    return (
        !isDesktop &&
        <>
            <Drawer direction="top">
                <DrawerTrigger>
                    <Menu size={30}/>
                </DrawerTrigger>
                <DrawerContent className="bg-[#EEEEEE]">
                    <div className="flex flex-col gap-2.5 px-6 py-2 items-center justify-center">
                        {
                            mobileLinks.map((link) => (
                                <>
                                    <Link key={link.name} href={link.href} className="py-2 font-medium">
                                        {link.name}
                                    </Link>
                                    <Separator className="max-w-[300px] bg-muted"/>
                                </>
                            ) )
                        }
                        <Button asChild className="w-full max-w-[300px] py-6 font-semibold">
                            <Link href={"/"}>Join NCKF</Link>
                        </Button>
                    </div>
                    
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileMenu