import { GetPostsQuery } from '@/__generated__/graphql'
import Link from 'next/link'
import { Button, Card } from 'react-bootstrap'

type Props = {
  post: NonNullable<GetPostsQuery['posts']['edges'][0]>['node'] | undefined
}

export default function Post({ post }: Props) {
  if (!post) return <></>

  return (
    <Link href={'/post/' + post.id}>
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}
