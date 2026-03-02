import React from 'react';
import { AnimatedBackground } from './ui/animated-background';
import PostListItem from './post-list-item';
import { Post } from '@/types/post';

export default function PostList({
  allPosts,
  max,
}: {
  allPosts: Post[];
  max?: number;
}) {
  const postsToShow = max ? allPosts.slice(0, max) : allPosts;

  return (
    <AnimatedBackground
      enableHover
      className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
    >
      {postsToShow.map((post) => (
        <PostListItem key={post.slug} post={post} />
      ))}
    </AnimatedBackground>
  );
}
