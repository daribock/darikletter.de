import PostListItem from './post-list-item';
import { Post } from '@/types/post';

export default function PostList({
  allPosts,
  max,
}: {
  allPosts: Post[];
  max?: number;
}) {
  const postsToShow = max ? allPosts.slice(0, max) : allPosts;

  return (
    <>
      {postsToShow.map((post) => (
        <PostListItem key={post.slug} post={post} />
      ))}
    </>
  );
}
