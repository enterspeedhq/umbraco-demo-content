import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      py={4}
      justify={"center"}
      margin="0 auto"
      borderTop="5px solid"
      borderColor="blue.400"
    >
      <Text>&copy; 2022 My tech blog. All rights reserved</Text>
    </Flex>
  );
}
