import Entity from '../components/Entity'
import { getByUrl } from '../lib/enterspeed'

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
