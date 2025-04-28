import { Check, Clock, Video } from 'lucide-react'
import React from 'react'

type Props = {
    duration: number,
    activities: number,
    videos: number
}

export const CourseDescription = (props: Props) => {
    const { duration, activities, videos } = props
    return (
        <section className='mx-auto w-full overflow-auto md:w-fit flex flex-nowrap  md:grid grid-cols-3 my-2 md:my-4'>
            <div className='border-x border-b-gray-300'>
                <div className='items-center gap-2 font-semibold text-stone-600 flex justify-center px-4 text-lg'>
                    <Clock />
                    <div>
                        Duración
                    </div>
                </div>
                <div className='text-center px-4'>{duration} horas (aprox)</div>
            </div>
            <div className='border-x border-b-gray-300'>
                <div className='items-center gap-2 font-semibold text-stone-600 flex justify-center px-4 text-lg'>
                    <Check />
                    <div>Actividades prácticas</div>
                </div>
                <div className='text-center px-4'>{activities} actividades</div>
            </div>
            <div className='border-x border-b-gray-300'>
                <div className='items-center gap-2 font-semibold text-stone-600 flex justify-center px-4 text-lg'>
                    <Video />
                    <div>Video</div>
                </div>
                <div className='text-center px-4'>{videos} sesiones</div>
            </div>
        </section>
    )
}