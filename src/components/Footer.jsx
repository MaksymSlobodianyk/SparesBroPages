import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.png" alt="SparesBro" />
            <span>SparesBro</span>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <Link href="/#features">Features</Link>
              <Link href="/support">Support</Link>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2026 SparesBro. Crafted by <strong>Maksym Slobodianyk</strong>
          </p>
          <p>
            Contact:{' '}
            <a href="mailto:sparesbro.app@gmail.com">sparesbro.app@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
