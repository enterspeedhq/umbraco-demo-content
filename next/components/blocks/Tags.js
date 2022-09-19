import { Box, Heading, Link } from '@chakra-ui/react'

export default function Tags ({
  block
}) {
  return (
    <>
      <Box textAlign={'center'} >
        <Heading
            fontWeight={600}
            as="h2"
          >
          {block.headline}
        </Heading>
      </Box>
      <Box textAlign={'center'} >
        {block.tags.map((t, index) => {
          return <Link key={`tag-${index}`}
              p={2}
              href={t.view.url ?? '#'}
              fontSize={'sm'}
              fontWeight={500}>
              {t.view.name}
            </Link>
        })}
      </Box>
    </>
  )
}
