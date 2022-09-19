import { Box, Text, Link, VStack, Image } from '@chakra-ui/react'

export default function PostTile ({ post }) {
  return (
    <Link
      href={post.href}
      _hover={{
        textDecoration: "none",
      }}
    >
      <VStack>
        <Box
          boxShadow="lg"
          rounded="md"
          bg="white"
          textAlign="center"
          transition="all 0.3s"
          bottom="0"
          position="relative"
          _hover={{
            boxShadow: "xl",
            bottom: "4px",
            cursor: "pointer",
          }}
        >
          <Image
            alt={post.title}
            title={post.title}
            borderTopRadius={"md"}
            // src="/the-flying-trunk-book.jpg"
            src={post.image.view.url}
          />
          <Box p="6">
            <Text fontWeight={"medium"}>{post.title}</Text>

            <Text paddingY={6} color={"gray.500"} fontStyle={"italic"}>
              {post.teaser}
            </Text>

            <Text fontSize={"md"}>
              {post.publishDate} {post.tags}
            </Text>
          </Box>
        </Box>
      </VStack>
    </Link>
  );
};
