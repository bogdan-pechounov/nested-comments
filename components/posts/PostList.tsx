'use client'

import { gql } from '@/__generated__'
import { useQuery } from '@apollo/client'
import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import Post from './Post'

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
          id
          title
          body
          user {
            name
          }
        }
      }
    }
  }
`)

export default function PostList() {
  //todo render first posts on server
  const { data, loading, fetchMore } = useQuery(GET_POSTS, {
    variables: { first: 2 },
  })

  if (loading) return <div>Loading...</div>
  if (!data) return <div></div> //todo what to do if done loading but there is no data

  const { endCursor, hasNextPage } = data.posts.pageInfo

  return (
    <Stack gap={1} className='p-1'>
      {data.posts.edges.map((edge) => (
        <Post key={edge?.node.id} post={edge?.node} />
      ))}
      {hasNextPage ? (
        <Button
          variant='primary'
          onClick={() =>
            fetchMore({
              variables: {
                after: endCursor,
              },
            })
          }
        >
          More
        </Button>
      ) : (
        <p>You have reached the end!</p>
      )}
    </Stack>
  )
}
