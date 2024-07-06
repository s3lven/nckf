"use client"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

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

import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import { Button } from "../ui/button"

const links = [
    {name: 'About Us', href: '/about'},
    {name: 'Schools', href: '/member-schools'},
    {name: 'Events', href: '/events'},
]

const moreLinks = [
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
        // Section
        <div className="max-w-[1440px] px-6 lg:px-[100px] mx-auto">
            {/* Layout */}
            <div className="flex justify-between items-center">
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
                <MobileMenu />
                {/* Tablet and Desktop Menu */}
                <div className="flex-col justify-center hidden sm:flex">
                    <NavigationMenu onValueChange={onNavChange}>
                        <NavigationMenuList>
                            <NavigationMenuItem className="flex gap-1">
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
                            <Button asChild className="font-semibold">
                                <Link href={"/"}>Join NCKF</Link>
                            </Button>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </div>
    )
}

export default Navbar