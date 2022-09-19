import { SimpleGrid, Button, Link, Container } from "@chakra-ui/react";
import PostTile from "../PostTile";
import PageHeader from "../PageHeader";
import Head from "next/head";

export default function Tag({ view }) {
  return (
    <>
      <Head>
        <title>{`Posts - ${view.tag}`}</title>
      </Head>
      <PageHeader title={`Posts - ${view.tag}`} />

      <Container
          py="20"
          maxW="container.lg"
          textAlign={'center'}
        >
      <Link
                href="/posts"
                _hover={{
                  textDecoration: 'none'
                }}
              >
                <Button
                  colorScheme={'blue'}
                  size={'lg'}
                  bg={'blue.500'}
                  rounded={'full'}
                  px={6}
                  _hover={{
                    bg: 'blue.600'
                  }}
                  _active={{
                    bg: 'blue.700'
                  }}>
                  See all posts
                </Button>
              </Link>
              </Container>

      <SimpleGrid
        columns={{ base: "0", md: "3" }}
        spacing={10}
        maxWidth={"container.lg"}
        marginX={{ base: "4", md: "auto" }}
        paddingY={"10"}
      >
        {view.posts.map((p, index) => {
          return <PostTile key={`post-${index}`} post={p} />;
        })}
      </SimpleGrid>
    </>
  );
}