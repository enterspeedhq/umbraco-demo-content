import { Flex, Heading, Text } from "@chakra-ui/react";
import { getByHandle } from "../lib/enterspeed";

export async function getStaticProps() {
  const data = await getByHandle("notfound", false, false);

  return {
    props: {
      view: data.notFound,
    },
  };
}

const NotFound = ({ view }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
    >
      <Heading fontSize="6xl" pb="4">
        {view.headline}
      </Heading>
      <Text fontSize="2xl">{view.description}</Text>
    </Flex>
  );
};

export default NotFound;
