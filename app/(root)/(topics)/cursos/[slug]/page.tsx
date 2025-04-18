import { COURSES, CoursesType } from "@/constants/data"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const { default: Post } = await import(`@/content/courses/${slug}.mdx`)
    return <Post />
}

export function generateStaticParams() {
    const courses = COURSES.map((course : CoursesType) => ({
        slug: course.slug,
    }))
    return courses
}

export const dynamicParams = false