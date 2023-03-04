import { Comment as PComment } from '@prisma/client'
import React from 'react'

type Props = {
  comment: PComment
}

export default function Comment({ comment }: Props) {
  return <div>{comment.body}</div>
}
