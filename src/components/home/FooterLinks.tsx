import Link from "next/link"
import clsx from "clsx"
import { Links } from './Footer'
import { Separator } from "../ui/separator"

const FooterLinks = ({ name, links, last } : { name:string, links:Links, last:boolean }) => {
    return (
        <>
            <div className="text-sm grid grid-cols-2 lg:grid-cols-1">
                <h1 className="font-semibold text-base">{name}</h1>
                <div className="flex flex-col gap-3">
                    {
                        links.map((link) => (
                            <Link key={link.name} href={link.href}
                                    className="text-nowrap">
                                {link.name}</Link>
                        ))
                    }
                </div>
            </div>
            <Separator className={clsx(
                'my-6 lg:hidden', {'hidden': last === true}
            )}/>
        </>
    )
}

export default FooterLinks