import { formatDate } from '@/lib/utils';
import { Post } from '@/types/post';
import Link from 'next/link';
import { Badge } from './ui/badge';

export default function PostListItem({ post }: { post: Post }) {
  return (
    <div className="-mx-3 rounded-xl px-3 py-3">
      <div className="flex flex-col space-y-1">
        <Link href={`/blog/${post.slug}`}>
          <h4 className="font-normal dark:text-zinc-100 hover:underline">
            {post.title}
          </h4>
        </Link>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.date)}
        </p>
        <p className="text-zinc-500 dark:text-zinc-400">{post.description}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {post.tags.map((tag) => (
              <Badge key={tag} href={`/blog/tag/${tag}`}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
