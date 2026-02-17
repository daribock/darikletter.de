import Link from 'next/link';
import Image from 'next/image';
import { metaData } from '../../lib/data';

const navItems = [{ name: 'Blog', href: '/blog' }];

export function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <Image
            src="/assets/darikletter.png"
            width="200"
            height="200"
            alt="darikletter"
          />
        </Link>
        <div>
          <Link href="/">{metaData.name}</Link>
          <p>Software Engineer</p>
        </div>
      </div>
      <nav>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
