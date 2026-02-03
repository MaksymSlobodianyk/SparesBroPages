import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Support - SparesBro',
  description: 'Get help with SparesBro. Contact support, report bugs, or suggest features.',
};

export default function SupportPage() {
  return (
    <PageLayout>
      <h1 className="page-title">Support</h1>

      <p className="intro-text">
        Need help with SparesBro? We're here to assist you. Reach out to us and
        we'll do our best to resolve your issue as quickly as possible.
      </p>

      <div className="contact-box">
        <h3>📧 Contact Support</h3>
        <a href="mailto:sparesbro.app@gmail.com" className="email-link">
          sparesbro.app@gmail.com
        </a>
        <p className="response-time">
          ⏱️ Expected response time:{' '}
          <span className="highlight">within 72 hours</span>
          <br />
          <small>(often much quicker!)</small>
        </p>
      </div>

      <h2>What Can We Help You With?</h2>

      <div className="reason-cards">
        <div className="reason-card">
          <div className="icon">🐛</div>
          <h4>Report a Bug</h4>
          <p>
            Found something not working as expected? Let us know and we'll fix
            it.
          </p>
        </div>
        <div className="reason-card">
          <div className="icon">💡</div>
          <h4>Suggest a Feature</h4>
          <p>
            Have an idea to make SparesBro better? We'd love to hear your
            suggestions.
          </p>
        </div>
      </div>

      <h2>Help Us Help You</h2>

      <p>
        To resolve your issue as quickly as possible, please include the
        following information in your email:
      </p>

      <div className="info-card">
        <h3>📋 Required Information</h3>
        <ul>
          <li>
            <strong>App Version</strong> — Found in Settings → About
          </li>
          <li>
            <strong>iOS Version</strong> — Found in iPhone Settings → General →
            About
          </li>
          <li>
            <strong>Device Model</strong> — e.g., iPhone 14 Pro, iPad Air
          </li>
          <li>
            <strong>Description of the Issue</strong> — What happened? What did
            you expect to happen?
          </li>
        </ul>
      </div>

      <div className="info-card">
        <h3>📸 If Reporting a Bug</h3>
        <ul>
          <li>
            <strong>Screenshots</strong> — Show us what you're seeing
          </li>
          <li>
            <strong>Steps to Reproduce</strong> — How can we recreate the issue?
          </li>
          <li>
            <strong>When It Started</strong> — Did it happen after an update?
          </li>
        </ul>
      </div>

      <p className="page-footer-note">
        Thank you for using SparesBro! Your feedback helps us make the app
        better for everyone. 🧡
      </p>
    </PageLayout>
  );
}
