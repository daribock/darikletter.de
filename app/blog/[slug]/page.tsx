import { Badge } from '@/components/ui/badge';
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
    <main>
      <section>
        <header className='space-y-4 mb-8'>
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
            <div className="flex flex-wrap gap-1 pt-1">
              {post.tags.map((tag) => (
                <Badge key={tag} href={`/blog/tag/${tag}`}>
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>
        <article className="prose prose-gray prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
          <div className="max-w-2xl mx-auto">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </article>
      </section>
    </main>
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
