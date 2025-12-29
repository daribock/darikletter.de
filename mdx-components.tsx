import type { MDXComponents } from 'mdx/types';
import { ComponentPropsWithoutRef } from 'react';
import { highlight } from 'sugar-high';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string;
      alt: string;
      caption: string;
    }) => {
      return (
        <figure>
          {/* FIXME: Remove and use next/image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      );
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string);
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
    },
  };
}
