import { Home, ContentPage, Post, Posts, Tag } from "./entities";

const entities = {
  home: Home,
  contentPage: ContentPage,
  post: Post,
  posts: Posts,
  tag: Tag
};

export default function Entity({ view }) {
  const Container = entities[view?.type];

  return <Container view={view} />;
}
