import Link from "next/link"
import clsx from "clsx"



const LinkButton = ({ route, content, transparent} : {route: string, content: string, transparent: boolean}) => {
    return (
        <button
            className={clsx(
                'px-6 py-3 text-white text-center',
                {
                    'bg-black border border-solid border-black rounded-md px-6 py-3': transparent === false,
                    '': transparent === true,
                },
            )}>
                        <Link href={route}>{content}</Link>
                    </button>
    )
}

export default LinkButton