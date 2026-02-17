import { metaData, socialLinks } from '@/lib/data';
import ThemeSwitch from '../theme-switch';

export function Footer() {
  return (
    <footer>
      <div>
        <a href={socialLinks.github.link} target="_blank">
          <span>
            © {new Date().getFullYear()} {metaData.name}
          </span>
          <span>Built with love ❤️</span>
        </a>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}
