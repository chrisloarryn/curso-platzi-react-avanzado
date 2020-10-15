// Dependencies
import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

// Components
import { App } from './App'

// https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql
const client = new ApolloClient({
  uri: 'https://petgram-server-chrisloarryn.chrisloarryn.vercel.app/graphql',
  cache: new InMemoryCache()
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
