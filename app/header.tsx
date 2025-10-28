import { TextEffect } from '@/components/ui/text-effect';
import Link from 'next/link';
import Image from 'next/image';
import { metaData } from '../lib/data';

export function Header() {
  return (
    <header className="mb-8 flex items-center space-x-4">
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
    </header>
  );
}
