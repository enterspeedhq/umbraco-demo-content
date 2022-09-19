import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Post } from "../../components/entities";
import { getByUrl } from "../../lib/enterspeed";
import { checkPreviewSessionStorage } from "../../helpers/previewSessionStorage";
import Error from "next/error";

export default function PostRoute() {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const preview = checkPreviewSessionStorage();

  useEffect(() => {
    const getPost = async () => {
      const data = await getByUrl(
        encodeURIComponent(`/posts/${slug}/`),
        preview
      );

      setPost(data);
      setLoading(false);
    };

    getPost();
  }, [slug, preview]);

  if (loading) {
    return null;
  }

  if (post.status === 404) {
    return <Error statusCode={404} />;
  }

  return <Post post={post} />;
}
