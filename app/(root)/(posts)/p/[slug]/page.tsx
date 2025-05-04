import { COURSES, CoursesType } from "@/constants/data"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const { default: Post } = await import(`@/content/posts/${slug}.mdx`)
    return <Post />
}

interface ParamsType {
    slug: string
}

export function generateStaticParams() {
    /*
    const courses = COURSES.map((course : CoursesType) => ({
        slug: course.slug,
    }))
        */

    const posts: ParamsType[]  = [
        {
            slug: 'como-es-la-primer-toma-de-contacto'
        },
        {
            slug: 'preguntas-frecuentes-con-reclutadores'
        }, {
            slug: "errores-comunes-durante-la-primer-entrevista"
        } ,
         {
            slug: "que-es-lo-que-se-piden-para-desarrollador-web-front-end-y-full-stack"
         },
         {
            slug: "que-es-lo-que-se-pide-para-desarrollador-back-end"
         }
    ];

    /*
    COURSES.map((course : CoursesType) => {
        course.topics?.map((post : CoursesType) => {
            posts.push({slug: post.slug})
        })
    })
    */

    return posts
}

export const dynamicParams = false