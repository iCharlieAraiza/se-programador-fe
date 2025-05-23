import Link from "next/link";

type Props = {
    title: string;
    numberModules: number;
    uri?: string;
}


export const CourseTitle = (props: Props) => {
    const { title, numberModules } = props;
    return (
        <>
            <div className="mb-2 md:my-4 text-right">
                <Link href='/cursos' className='text-[#937723] font-semibold text-md'>
                    &larr; Ver todos los temas
                </Link>
            </div>
            <header className='flex justify-center gap-4 max-w-2xl mx-auto'>
                <div className="pt-2">
                    <div className="w-12 h-12 bg-[#F2E6C5] rounded-full border-4"></div>
                </div>
                <div className="">
                    <h1 className='text-4xl font-semibold tracking-tight'>
                        {title}
                    </h1>
                    <p className='text-lg my-[0!important]'> {numberModules} clases disponibles</p>
                </div>
            </header>
        </>
    )
}