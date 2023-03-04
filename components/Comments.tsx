import { Comment as PComment } from '@prisma/client'
import React from 'react'
import Comment from './Comment'

type Props = {
  comments: PComment[]
}

export default function Comments({ comments }: Props) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}
