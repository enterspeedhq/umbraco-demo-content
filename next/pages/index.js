import dynamic from 'next/dynamic'
import { getByUrl } from '../lib/enterspeed'

const Entity = dynamic(import('../components/Entity'))

export async function getServerSideProps () {
  const data = await getByUrl(encodeURIComponent('/'))

  return {
    props: {
      view: data
    }
  }
}

const Index = ({ view }) => {
  return (
    <>
      <Entity view={view} />
    </>
  )
}

export default Index
