import { Text, Hero, LatestPosts, Tags } from './blocks'

const blocks = {
  blockHero: Hero,
  blockText: Text,
  blockLatestPosts: LatestPosts,
  blockTags: Tags
}

export default function Block ({ block }) {
  const Container = blocks[block.alias]

  return <Container block={block} />
}
