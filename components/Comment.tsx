'use client'

import { Comment as PComment } from '@prisma/client'
import React, { useState } from 'react'

import { Button, Card, Form } from 'react-bootstrap'

type Props = {
  comment: PComment
}

function CommentForm({ onComment }: { onComment: (comment: string) => void }) {
  const [body, setBody] = useState('')

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        console.log(body)
        onComment(body)
      }}
    >
      <Form.Control
        as='textarea'
        placeholder='Leave a comment here'
        onChange={(e) => setBody(e.target.value)}
      />
      <Button variant='primary' type='submit'>
        Comment
      </Button>
    </Form>
  )
}

export default function Comment({ comment }: Props) {
  const [isReplying, setIsReplying] = useState(false)
  const [comments, setComments] = useState<PComment[]>([])

  return (
    <Card>
      <Card.Body>
        <Card.Text>{comment.body}</Card.Text>
        <Button onClick={() => setIsReplying((isReplying) => !isReplying)}>
          Reply
        </Button>
        {isReplying && (
          <CommentForm
            onComment={(comment) => {
              setIsReplying(false)
              setComments([
                ...comments,
                {
                  body: comment,
                  id: comment,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  userId: '',
                  postId: '',
                  parentId: '',
                },
              ])
            }}
          />
        )}
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Card.Body>
    </Card>
  )
}
