'use client'
import { ApolloProvider, InMemoryCache } from '@apollo/client'
import apolloClient from '@/lib/apollo'
import { SessionProvider } from 'next-auth/react'

type Props = {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </SessionProvider>
  )
}
