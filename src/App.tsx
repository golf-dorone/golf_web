import { AppRoute } from 'AppRoute'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const text = {
  textStyles: {
    h1: {
      fontSize: ['25px', '40px'],
      color: 'blue',
    },
    h2: {
      fontSize: '24px',
      color: 'red',
    },
    h3: {
      fontSize: '16px',
      color: 'orange',
    },
  },
}

const theme = extendTheme({ colors, text })

export const App = () => {
  return (
    <>
      <ChakraProvider resetCSS={false} theme={theme}>
        <AppRoute />
      </ChakraProvider>
    </>
  )
}
