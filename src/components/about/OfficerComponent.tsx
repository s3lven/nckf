import { Separator } from '@/components/ui/separator'
import { OfficerType } from './officers'

const OfficerComponent = ({ officers, title }: {officers:OfficerType, title:boolean}) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-0.5 text-center w-full">
            <div>
                <h1 className='text-black font-semibold text-xl'>{officers.name}</h1>
                {title &&
                    <p className='text-slate-600 font-semibold text-lg'>{officers.dojo}</p>
                }
            </div>
            <Separator className='bg-black max-w-[300px]'/>
            <p className='text-slate-600 font-semibold text-lg'>{title? officers.title : officers.dojo}</p>
        </div>
    )
}

export default OfficerComponent