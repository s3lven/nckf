"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuHoverStyle,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Menu } from "lucide-react"

import Image from "next/image"
import Link from "next/link"

const links = [
    {name: 'Home', href: '/'},
    {name: 'About Us', href: '/about'},
    {name: 'Schools', href: '/member-schools'},
    {name: 'Events', href: '/events'},
]

const moreLinks = [
    {name: 'Fees', href: '#'},
    {name: 'Resources', href: '#'},
    {name: 'Photos', href: '#'},
]

// Fix for the Navbar not centering under the hovered element
function onNavChange() {
    setTimeout(() => {
        // Select elements with the state "open"
        const triggers = document.querySelectorAll(
            '.submenu-trigger[data-state="open"]'
        );
        const dropdowns = document.querySelectorAll(
            '.nav-viewport[data-state="open"]'
        );
        
        // Check if both triggers and dropdowns are present
        if (!triggers.length || !dropdowns.length) return;

        // Simplify the calculation by extracting it into a variable
        const { offsetLeft, offsetWidth } = triggers[0] as HTMLElement;
        const menuWidth = dropdowns[0].children[0].clientWidth;
        const menuLeftPosition = offsetLeft + offsetWidth / 2 - menuWidth / 2;

        // Apply the calculated position
        document.documentElement.style.setProperty(
            "--menu-left-position",
            `${menuLeftPosition}px`
        );
    });
}

function Navbar() {
    return (
        <div className="max-w-[1440px] flex justify-between px-6 min-[1440px]:mx-auto sm:justify-between">
            {/* NCKF Logo and Home Link */}
            <Link href={'/'}>
                <Image 
                    priority
                    src="/images/nckf.jpg"
                    width={70}
                    height={75}
                    alt="NCKF logo"
                />
            </Link>
            {/* Mobile Menu */}
            <div className="flex flex-col justify-center sm:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger className="focus-visible:outline-none">
                        <Menu size={30}/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {
                            links.map((link) => (
                                <DropdownMenuItem asChild key={link.name} className="w-full">
                                    <Link href={link.href} className="py-2 px-3">{link.name}</Link>
                                </DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            {/* Tablet and Desktop Menu */}
            <div className="flex-col justify-center hidden sm:flex">
                <NavigationMenu onValueChange={onNavChange}>
                    <NavigationMenuList>
                        <NavigationMenuItem className="flex">
                            {
                                links.map((link) => (
                                    <Link key={link.name} href={link.href} legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuHoverStyle()}>
                                            {link.name}
                                        </NavigationMenuLink>
                                    </Link>
                                ))
                            }
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="submenu-trigger">More</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                {
                                    moreLinks.map((link) => (
                                        <Link key={link.name} href={link.href} legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                {link.name}
                                            </NavigationMenuLink>
                                        </Link>
                                    ))
                                }
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

export default Navbar