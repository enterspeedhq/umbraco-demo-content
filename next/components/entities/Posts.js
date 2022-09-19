import PageHeader from "../PageHeader";
import PostTile from "../PostTile";
import Block from "../Block";
import { SimpleGrid, Container } from "@chakra-ui/react";
import Head from "next/head";

export default function Posts({ view }) {
  return (
    <>
      <Head>
        <title>{view.headline}</title>
        <meta description={view.seoMetaDescription} />
      </Head>
      <PageHeader title="Posts" />
        <Container
          py="20"
          maxW="container.lg"
        >
          {view.blocks?.map((c, index) => {
            return <Block key={index} block={c} />;
          })}
        </Container>
      <SimpleGrid
        columns={{ base: "0", md: "3" }}
        spacing={10}
        maxWidth={"container.lg"}
        marginX={{ base: "4", md: "auto" }}
        paddingY={"10"}
      >
        {view.posts.map((p, index) => {
          return <PostTile key={`post-${index}`} post={p.view} />;
        })}
      </SimpleGrid>
    </>
  );
}
