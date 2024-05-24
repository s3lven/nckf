import Link from "next/link"
import clsx from "clsx"
import { Links } from './Footer'

const FooterLinks = ({ name, links, last } : { name:string, links:Links, last:boolean }) => {
    return (
        <>
            <div className="text-sm grid grid-cols-2 mx-5 lg:grid-cols-none lg:grid-rows-5">
                <h1 className="font-semibold xl:text-base">{name}</h1>
                <div className="flex flex-col lg:row-span-4 gap-3 lg:justify-between lg:text-balance text-slate-700">
                    {
                        links.map((link) => (
                            <Link key={link.name} href={link.href}>{link.name}</Link>
                        ))
                    }
                </div>
            </div>
            <hr className={clsx(
                'my-6 mx-5 lg:hidden', {'hidden': last === true}
            )}/>
        </>
    )
}

export default FooterLinks