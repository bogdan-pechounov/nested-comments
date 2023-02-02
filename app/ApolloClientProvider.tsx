'use client'
import { ApolloProvider, InMemoryCache } from '@apollo/client'
import apolloClient from '@/lib/apollo'

type Props = {
  children: React.ReactNode
}

export default function ApolloClientProvider({ children }: Props) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
