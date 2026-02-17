import { getAllPosts } from '@/lib/posts';
import Blog from '@/components/pages/blog';

export default function Index() {
  const allPosts = getAllPosts();

  return <Blog allPosts={allPosts} />;
}
