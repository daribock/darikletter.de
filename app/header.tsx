import { TextEffect } from '@/components/ui/text-effect';
import Link from 'next/link';
import Image from 'next/image';
import { metaData } from '../lib/data';

const navItems = [{ name: 'Blog', href: '/blog' }];

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            src="/darikletter.png"
            width="200"
            height="200"
            alt="darikletter"
            className="h-[54px] w-[54px] rounded-full "
          />
        </Link>
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            {metaData.name}
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Software Engineer
          </TextEffect>
        </div>
      </div>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="ml-4 font-medium text-black dark:text-white"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
