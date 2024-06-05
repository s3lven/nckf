import { Separator } from '@/components/ui/separator'
import { OfficerType } from './officers'

const OfficerComponent = ({ officers, title }: {officers:OfficerType, title:boolean}) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-0.5 text-center w-4/5">
            <div className='mb-2'>
                <h1 className='text-black font-semibold text-2xl'>{officers.name}</h1>
                {title &&
                    <p className='text-slate-600 font-medium text-lg'>{officers.dojo}</p>
                }
            </div>
            <Separator />
            <p className='text-slate-600 font-semibold text-lg'>{title? officers.title : officers.dojo}</p>
        </div>
    )
}

export default OfficerComponent