import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import TopNav from '../components/TopNav'
import '@fontsource/henny-penny'
import '@fontsource/gentium-book-basic'
import Head from 'next/head'
import Footer from '../components/Footer'
import { getByHandle } from '../lib/enterspeed'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: 'orange.100'
      }
    })
  }
})

function App ({ Component, pageProps, navigation }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ChakraProvider theme={theme}>
        <TopNav nav={navigation.navigationItems} />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )
}

App.getInitialProps = async () => {
  const data = await getByHandle('navigation')
  return { navigation: data }
}

export default App
