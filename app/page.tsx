import { getAllPosts } from '@/lib/posts';
import Home from '@/components/pages/home';

import PostList from '@/components/post-list';

export default function Index() {
  const allPosts = getAllPosts();

  const postList = PostList({ allPosts, max: 3 });

  return <Home postList={postList} />;
}
