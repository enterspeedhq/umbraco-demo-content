import { Box, Heading, Container } from '@chakra-ui/react'

export default function PageHeader ({ title }) {
  return (
    <Box
      backgroundImage="url('../magic-key-bg.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      borderBottom="5px solid"
      borderColor="orange.400"
    >
      <Box bg="rgb(0 0 0 / 75%)" zIndex="2">
        <Container maxW={'container.xl'}>
          <Box textAlign={'center'} py={{ base: 10, md: 20 }}>
            <Heading
              fontWeight={600}
              color={'white'}
              as="h1"
              fontFamily={'Henny Penny'}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'150%'}
            >
              {title}
            </Heading>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
