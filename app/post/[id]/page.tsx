import Comments from '@/components/Comments'
import prisma from '@/lib/prisma'

type Props = {
  params: {
    id: string
  }
}

export default async function PostPage({ params: { id } }: Props) {
  const post = await prisma.post.findUnique({
    where: { id },
    include: { user: true, comments: true },
  })

  if (!post) return <></> //todo

  return (
    <>
      <h1>{post.title}</h1>
      <article>{post.body}</article>
      <h3>Comments</h3>
      <section>
        <Comments comments={post.comments} />
      </section>
    </>
  )
}
