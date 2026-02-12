import markdownToHtml from '@/lib/markdown-to-html';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';
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
        <h1 className="title font-semibold text-2xl tracking-tighter">
          {post.title}
        </h1>
       <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.date)}
        </p>
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
