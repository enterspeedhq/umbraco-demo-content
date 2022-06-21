import { Home, ContentPage, Product, Products } from "./entities";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const entities = {
  home: Home,
  contentPage: ContentPage,
  product: Product,
  products: Products,
};

export default function Entity({ view }) {
  const Container = entities[view?.type];

  const router = useRouter();
  const statusCode = view.status;

  const [routerReady, setRouterReady] = useState(false);

  useEffect(() => {
    setRouterReady(router.isReady);
  }, [router.isReady]);

  if (statusCode === 404) {
    if (routerReady) router.push("/404");

    return <>Loading...</>;
  } else return <Container view={view} />;
}
