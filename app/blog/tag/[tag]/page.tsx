import { getAllTags, getPostsByTag } from '@/lib/posts';
import PostList from '@/components/post-list';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function TagPage(props: Params) {
  const params = await props.params;
  const tag = decodeURIComponent(params.tag);
  const posts = getPostsByTag(tag);

  if (posts.length === 0) {
    return notFound();
  }

  return (
    <section>
      <h3 className="mb-3 text-lg font-medium">
        Posts tagged with &quot;{tag}&quot;
      </h3>
      <div className="flex flex-col space-y-0">
        <PostList allPosts={posts} />
      </div>
    </section>
  );
}

type Params = {
  params: Promise<{
    tag: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const tag = decodeURIComponent(params.tag);

  return {
    title: `Posts tagged with "${tag}" | Blog`,
  };
}

export async function generateStaticParams() {
  const tags = getAllTags();

  return tags.map((tag) => ({
    tag: tag,
  }));
}
