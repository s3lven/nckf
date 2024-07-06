import Link from "next/link"
import { FooterLinks } from "./Footer"

const FooterLinkSection = ({name, links}: {name:string, links: FooterLinks}) => {
    return (
        <div className="flex flex-col gap-2 xl:gap-6">
            <h1>{name}</h1>
            {
                links.map((link) => (
                    <Link key={link.name} href={link.href} className="font-medium text-[#71717A] hover:underline">{link.name}</Link>
                ))
            }
        </div>
    )
}

export default FooterLinkSection