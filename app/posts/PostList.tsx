'use client'

import { gql, useQuery } from '@apollo/client'
import React from 'react'

const PostsQuery = gql`
  query {
    posts {
      title
    }
  }
`
export default function PostList() {
  const { data } = useQuery(PostsQuery)
  console.log(data)
  return <div>PostList</div>
}
