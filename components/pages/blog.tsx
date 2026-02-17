import PostList from '../post-list';
import { Post } from '@/types/post';

export default function Blog({ allPosts }: { allPosts: Post[] }) {
  return (
    <main>
      <section>
        <h3>Blog</h3>
        <div>
          <PostList allPosts={allPosts} />
        </div>
      </section>
    </main>
  );
}
