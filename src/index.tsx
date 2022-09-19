import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import React from 'react'
import { setContext } from '@apollo/client/link/context'
import { getStoredAuthToken } from './shared/utils/authToken'

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_API_DOMEIN || ''}/graphql`,
  credentials: 'include',
})

// 認証トークンをキャッシュ化
const authLink = setContext((_, { headers }) => {
  const token = getStoredAuthToken()
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
