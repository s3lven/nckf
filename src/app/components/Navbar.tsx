"use client"

import Image from "next/image"
import Link from "next/link"
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'

const links = [
    {name: 'About Us', href: '/about'},
    {name: 'Schools', href: '#'},
    {name: 'Events', href: '#'},
]

const moreLinks = [
    {name: 'Fees', href: '#'},
    {name: 'Resources', href: '#'},
    {name: 'Photos', href: '#'},
]

function Navbar() {

    return (
        <nav className="max-w-[1440px] flex justify-between sm:justify-between mx-auto">
            <Link href={'/'}>
                <Image 
                    priority
                    src="/images/nckf.jpg"
                    width={70}
                    height={75}
                    alt="NCKF logo"
                />
            </Link>
            <div className="flex items-center gap-8">
                {/* Hamburger Menu for mobile*/}
                <Popover className="sm:hidden">
                    <PopoverButton className='focus:outline-none '>
                        <Image
                            priority
                            src="/icons/hamburger-menu-icon.svg"
                            alt="Hamburger Menu"
                            width={32}
                            height={32}
                            
                        />
                    </PopoverButton>
                    <Transition
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <PopoverPanel
                            anchor="bottom"
                            className='w-screen divide-y divide-white/5 rounded-xl bg-gray-500/5 text-sm/6 [--anchor-gap:20px] flex text-center justify-center'>
                                <div className='p-3'>
                                    {links.map((item) => (
                                        <Link key={item.name} href={item.href} className="w-full block rounded-lg py-2 px-3 transition hover:bg-white/50 font-semibold">
                                                {item.name}
                                        </Link>    
                                    ))}
                                    <Link href={'#'} className="w-full block rounded-lg py-2 px-3 transition hover:bg-white/50 font-semibold">
                                        More
                                    </Link>
                                </div>
                        </PopoverPanel>
                    </Transition>
                </Popover>

                {/* Nav for Tablets/Desktop */}
                <div className="hidden sm:flex gap-10 font-semibold">
                    {links.map((item) => (
                        <Link key={item.name} href={item.href}>{item.name}</Link>
                    ))}
                    <Popover>
                        <PopoverButton className='flex focus:outline-none'>
                            More
                            <Image 
                                priority
                                src="/icons/caret-down-icon.svg"
                                alt="Caret Icon"
                                width={20}
                                height={20}
                            />
                        </PopoverButton>
                        <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel
                                anchor="bottom"
                                className="divide-y divide-white/5 rounded-xl bg-gray-500/5 text-sm/6 [--anchor-gap:20px]">
                                    <div className='p-3'>
                                        {moreLinks.map((item) => (
                                            <Link key={item.name} href={item.href} className="w-full block rounded-lg py-2 px-3 transition hover:bg-white/50 font-semibold">
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>
                </div>
            </div>
        </nav>
    )
}

export default Navbar