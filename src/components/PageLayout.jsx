import Link from 'next/link';

export default function PageLayout({ children, title }) {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        <div className="page-logo-header">
          <img src="/logo.png" alt="SparesBro Logo" />
          <h1>SparesBro</h1>
        </div>

        <nav className="page-nav">
          <Link href="/">Home</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/support">Support</Link>
        </nav>

        {children}
      </div>
    </div>
  );
}
