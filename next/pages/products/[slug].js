import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Product } from "../../components/entities";
import { getByUrl } from "../../lib/enterspeed";
import { checkPreviewSessionStorage } from "../../helpers/previewSessionStorage";

export default function ProductRoute() {
  const router = useRouter();
  const { slug } = router.query;

  const [product, setProduct] = useState(null);

  const [statusCode, setStatusCode] = useState(null);
  const [routerReady, setRouterReady] = useState(false);

  const [loading, setLoading] = useState(true);

  const preview = checkPreviewSessionStorage();

  useEffect(() => {
    const getProduct = async () => {
      const data = await getByUrl(
        encodeURIComponent(`/products/${slug}/`),
        preview
      );

      setStatusCode(data.status);
      setProduct(data);
      setLoading(false);
    };

    getProduct();
  }, [slug, preview]);

  useEffect(() => {
    setRouterReady(router.isReady);
  }, [router.isReady]);

  if (loading) {
    return null;
  }

  if (statusCode === 404) {
    if (routerReady) router.push("/404");

    return <>Loading...</>;
  } else return <Product product={product} />;
}
