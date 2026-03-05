import { getAllPosts } from '@/lib/posts';
import BlogPageClient from '@/components/blog-page-client';

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <section>
      <h3 className="mb-3 text-lg font-medium">Blog</h3>
      <BlogPageClient allPosts={allPosts} />
    </section>
  );
}
