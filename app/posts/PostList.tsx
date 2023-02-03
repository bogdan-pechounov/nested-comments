'use client'

import { gql, useQuery } from '@apollo/client'
import React from 'react'

const PostsQuery = gql`
  query ($first: Int, $after: ID) {
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
`
export default function PostList() {
  const { data, loading, fetchMore } = useQuery(PostsQuery, {
    variables: { first: 2 },
  })

  console.log(data)
  if (loading) return <div>Loading...</div>

  const { endCursor, hasNextPage } = data.posts.pageInfo

  return (
    <div>
      {data?.posts.edges.map(({ node }: any) => (
        <div key={node.id}>{node.title}</div>
      ))}
      {hasNextPage ? (
        <button
          onClick={() =>
            fetchMore({
              variables: {
                after: endCursor,
                //   updateQuery: (prevResult, { fetchMoreResult }) => {
                //     fetchMoreResult.posts.edges = [
                //       ...prevResult.posts.edges,
                //       ...fetchMoreResult.posts.edges,
                //     ]

                //     return fetchMoreResult
                //   },
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
