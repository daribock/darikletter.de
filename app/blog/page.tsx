import { getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <section>
      {allPosts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums">
              {formatDate(post.date, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.title}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
