import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/post-list';

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <section>
      <h3 className="mb-3 text-lg font-medium">Blog</h3>
      <div className="flex flex-col space-y-0">
        <PostList allPosts={allPosts} />
      </div>
    </section>
  );
}
