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
    return [{ slug: 'teche-fff' }, { slug: 'about' }]
}

export const dynamicParams = false