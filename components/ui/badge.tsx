import { cn } from '@/lib/utils';
import Link from 'next/link';

interface BadgeProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export function Badge({ children, href, className }: BadgeProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-2 py-0.5 text-xs bg-zinc-200 dark:bg-zinc-800 rounded-full whitespace-nowrap';

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          baseClasses,
          'hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors',
          className,
        )}
      >
        {children}
      </Link>
    );
  }

  return <span className={cn(baseClasses, className)}>{children}</span>;
}
