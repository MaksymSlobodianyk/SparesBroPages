import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <Link href="/" className="nav-brand">
          <img src="/logo.png" alt="SparesBro" />
          <span>SparesBro</span>
        </Link>
        <div className="nav-links">
          <Link href="/#features">Features</Link>
          <Link href="/support">Support</Link>
          <a
            href="https://apps.apple.com/cz/app/sparesbro/id6754807916"
            className="nav-cta"
          >
            Download SparesBro
          </a>
        </div>
      </div>
    </nav>
  );
}
