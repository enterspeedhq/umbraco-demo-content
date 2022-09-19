import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import PostTile from "../PostTile";

export default function LatestPosts ({
  block
}) {
  return (
    <>
      <Box textAlign={'center'} >
          <Heading
            fontWeight={600}
            as="h2"
          >
          {block.title}
          </Heading>
        </Box>
      <SimpleGrid
        columns={{ base: "0", md: "3" }}
        spacing={10}
        maxWidth={"container.lg"}
        marginX={{ base: "4", md: "auto" }}
        paddingY={"10"}
      >
        {block.posts.map((p, index) => {
          return <PostTile key={`post-${index}`} post={p.view} />;
        })}
      </SimpleGrid>
    </>
  )
}
