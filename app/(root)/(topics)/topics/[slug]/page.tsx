export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    console.log('slug', slug)

    const { default: Post } = await import(`@/content/${slug}.mdx`)
    return <Post />
}

export function generateStaticParams() {
    return [{ slug: 'hello' }]
}

export const dynamicParams = false