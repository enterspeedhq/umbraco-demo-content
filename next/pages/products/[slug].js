import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Product } from '../../components/entities'
import { getByUrl } from '../../lib/enterspeed'

export default function ProductRoute () {
  const router = useRouter()
  const { slug } = router.query

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProduct = async () => {
      const data = await getByUrl(encodeURIComponent(`/products/${slug}/`))

      setProduct(data)
      setLoading(false)
    }

    getProduct()
  }, [slug])

  if (loading) {
    return null
  }

  return <Product product={product} />
}
