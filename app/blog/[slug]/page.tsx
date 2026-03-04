import markdownToHtml from '@/lib/markdown-to-html';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { cn, formatDate } from '@/lib/utils';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');

  console.log('Post content:', content);

  return (
    <section>
      <header>
        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={`Cover Image for ${post.title}`}
            className={cn('w-full rounded-xl')}
            width={1300}
            height={630}
          />
        )}
        <h1 className="title font-semibold text-2xl tracking-tighter">
          {post.title}
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.date)}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </header>
      <article>
        <div className="max-w-2xl mx-auto">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </article>
    </section>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example`;

  return {
    title,
    // openGraph: {
    //   title,
    //   images: [post.ogImage.url],
    // },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
