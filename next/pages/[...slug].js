import Entity from "../components/Entity";
import { getByHandle, getByUrl } from "../lib/enterspeed";
import Error from "next/error";

const paths = [];

const generateSubMenu = (children) => {
  children.forEach((child) => {
    paths.push({
      params: { slug: child.href.split("/").filter((a) => !!a) },
    });

    if (child.children) {
      generateSubMenu(child.children);
    }
  });
};

const generateNavBarPaths = (navigation) => {
  if (navigation) {
    navigation.forEach((nav) => {
      paths.push({
        params: { slug: nav.view.href.split("/").filter((a) => !!a) },
      });

      if (nav.view.children) {
        generateSubMenu(nav.view.children);
      }
    });
  }
};

const buildPaths = (navigation) => {
  generateNavBarPaths(navigation);

  return paths;
};

export async function getStaticPaths() {
  const data = await getByHandle("navigation");
  buildPaths(data.navigationItems);

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, preview }) {
  const data = await getByUrl(
    encodeURIComponent(`/${params.slug.join("/")}/`),
    preview
  );

  return {
    props: {
      view: data,
      preview: preview || null,
    },
    revalidate: 60,
  };
}

const Content = ({ view }) => {
  if (view.status === 404) {
    return <Error statusCode={404} />;
  }

  return <Entity view={view} />;
};

export default Content;
