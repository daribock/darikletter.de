import { formatDate } from '@/lib/utils';
import { Post } from '@/types/post';
import Link from 'next/link';

export default function PostListItem({ post }: { post: Post }) {
  return (
    <Link
      key={post.slug}
      className="-mx-3 rounded-xl px-3 py-3"
      href={`/blog/${post.slug}`}
      data-id={post.slug}
    >
      <div className="flex flex-col space-y-1">
        <h4 className="font-normal dark:text-zinc-100">{post.title}</h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.date)}
        </p>
        <p className="text-zinc-500 dark:text-zinc-400">{post.description}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs bg-zinc-200 dark:bg-zinc-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
