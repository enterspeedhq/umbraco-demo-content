import Head from 'next/head'
import Block from "../Block";
import { Hero } from '../blocks'
import { Container } from "@chakra-ui/layout";

export default function Home ({ view }) {
  return (
    <>
      <Head>
        <title>{view.heroHeader}</title>
        <meta description={view.heroDescription}/>
      </Head>

      <main>
        <Hero block={{
          heroHeader: view.heroHeader,
          heroDescription: view.heroDescription,
          heroCTACaption: view.heroCTACaption,
          heroCTALink: view.heroCTALink
        }} />
        <Container
          py="20"
          maxW="container.lg"
        >
          {view.blocks?.map((c, index) => {
            return <Block key={index} block={c} />;
          })}
        </Container>
      </main>
    </>
  )
}
