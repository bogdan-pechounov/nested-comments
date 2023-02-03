'use client'

import { gql } from '@/__generated__'
import { useQuery } from '@apollo/client'
import React from 'react'

const GET_POSTS = gql(/* GraphQL */ `
  query GetPosts($first: Int, $after: ID) {
    posts(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          title
          id
          user {
            name
          }
        }
      }
    }
  }
`)

export default function PostList() {
  const { data, loading, fetchMore } = useQuery(GET_POSTS, {
    variables: { first: 2 },
  })

  if (loading) return <div>Loading...</div>
  if (!data) return

  const { endCursor, hasNextPage } = data.posts.pageInfo

  return (
    <div>
      {data?.posts.edges.map(({ node }) => (
        <div key={node.id}>{node.title}</div>
      ))}
      {hasNextPage ? (
        <button
          onClick={() =>
            fetchMore({
              variables: {
                after: endCursor,
              },
            })
          }
        >
          More
        </button>
      ) : (
        <p>You have reached the end!</p>
      )}
    </div>
  )
}
