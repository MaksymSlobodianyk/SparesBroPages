import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Privacy Policy - SparesBro',
  description: 'Privacy Policy for SparesBro mobile application.',
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <h1 className="page-title">Privacy Policy for SparesBro</h1>
      <p className="last-updated">
        <strong>Last Updated:</strong> 15.11.2025
      </p>

      <p>
        This Privacy Policy describes how Maksym Slobodianyk ("we", "us", or
        "our") collects, uses, and shares information in connection with your
        use of the SparesBro mobile application (the "Service").
      </p>

      <p>
        Your privacy is a top priority for us. Our guiding principle is to
        collect only the minimum data necessary to provide and improve the
        Service.
      </p>

      <h2>Data Controller</h2>

      <p>
        The "Data Controller" (the entity responsible for your data) for the
        Service is:
      </p>

      <p>
        <strong>Name:</strong> Maksym Slobodianyk
        <br />
        <strong>Contact Email:</strong>{' '}
        <a href="mailto:sparesbro.app@gmail.com">sparesbro.app@gmail.com</a>
      </p>

      <p>
        As we are based in the Czech Republic, your data is protected by the
        EU's General Data Protection Regulation (GDPR).
      </p>

      <h2>1. Our Privacy-First Approach</h2>

      <p>
        We designed SparesBro to be private. We do not have a user account
        system, and we do not have access to your personal item data.
      </p>

      <ul>
        <li>
          <strong>Essential (Free) Version:</strong> All your data (item names,
          stock levels, replacement history) is stored only on your device. We
          cannot see, read, or access this information.
        </li>
        <li>
          <strong>Unlimited (Paid) Version:</strong> If you upgrade, you have
          the option to sync your data using Apple's iCloud service. This sync
          is managed by Apple and is tied to your personal iCloud account. We do
          not have access to your Apple ID or any of the data stored in your
          iCloud.
        </li>
      </ul>

      <h2>2. What Data We Collect (and Why)</h2>

      <p>
        We collect two types of information: "User Content" (which we cannot
        access) and "Analytics Data" (which we use to improve the app).
      </p>

      <h3>A. User Content (We CANNOT Access This)</h3>

      <p>This is the data you create in the app.</p>

      <ul>
        <li>
          <strong>What it is:</strong> Item names, emoji icons, stock levels,
          replacement schedules (time-based or usage-based), and replacement
          history.
        </li>
        <li>
          <strong>How it's used:</strong> This data is used by the app locally
          on your device to perform its core functions: tracking your items,
          managing your stock, and sending you reminders (local notifications).
        </li>
        <li>
          <strong>Where it's stored:</strong> On your device (Essential) or in
          your personal iCloud (Unlimited).
        </li>
      </ul>

      <h3>B. Analytics Data (To Improve the App)</h3>

      <p>
        To understand how our app is being used, identify bugs, and improve
        features, we use a third-party analytics service, PostHog.
      </p>

      <p>
        <strong>What it is:</strong> This is anonymous or pseudonymous usage
        data. It may include:
      </p>

      <ul>
        <li>
          <strong>App Events:</strong> Such as when you add an item, complete
          onboarding, or use a feature.
        </li>
        <li>
          <strong>Device Information:</strong> Your device model, iOS version,
          and country.
        </li>
        <li>
          <strong>Performance Data:</strong> Crash reports and information on
          app speed.
        </li>
      </ul>

      <p>
        <strong>What it is NOT:</strong> Our analytics are configured to never
        collect the personal content you enter. We do not log your item names,
        history, or stock counts. The data is about how you use the app, not
        what you are tracking.
      </p>

      <p>
        <strong>Our Legal Basis:</strong> We collect this data based on our
        "legitimate interest" to maintain and improve the Service.
      </p>

      <h3>C. In-App Purchase Data</h3>

      <p>
        The "Unlimited Version" is a one-time in-app purchase processed by
        Apple. We do not collect, see, or store your credit card information or
        payment details. We only receive an anonymous confirmation (a "token")
        from Apple that a purchase was completed.
      </p>

      <h2>3. How We Share Your Data</h2>

      <p>
        We do not sell, rent, or trade your data with anyone. We only share data
        with the following third-party services as necessary to operate the app.
      </p>

      <h3>Apple</h3>

      <ul>
        <li>To process payments for the one-time In-App Purchase.</li>
        <li>
          To provide the iCloud synchronization feature if you are an
          "Unlimited" user.
        </li>
      </ul>

      <h3>PostHog</h3>

      <ul>
        <li>
          To provide us with the anonymous analytics data described in Section
          2B. You can read PostHog's Privacy Policy at{' '}
          <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">
            https://posthog.com/privacy
          </a>
          .
        </li>
      </ul>

      <h2>4. Your Data Rights (GDPR)</h2>

      <p>
        Because we are based in the EU, you have specific rights over your data.
      </p>

      <ul>
        <li>
          <strong>Right to Access, Rectify, and Erase:</strong> You have full
          control over your User Content. Because this data is stored on your
          device or in your iCloud, you can access, edit, and delete it at any
          time directly within the SparesBro app.
        </li>
        <li>
          <strong>Right to Object (Analytics):</strong> You have the right to
          object to our collection of analytics data. You can disable this data
          collection at any time from the "Settings" menu within the SparesBro
          app.
        </li>
        <li>
          <strong>Right to Lodge a Complaint:</strong> If you believe we are not
          handling your data correctly, you have the right to lodge a complaint
          with a data protection authority. The relevant authority in the Czech
          Republic is the Úřad pro ochranu osobních údajů (Office for Personal
          Data Protection).
        </li>
      </ul>

      <h2>5. Data Security</h2>

      <p>
        We take reasonable measures to protect the limited analytics data we
        collect. The security of your personal User Content is handled by the
        built-in security of your device (iOS) and, if applicable, your Apple
        iCloud account.
      </p>

      <h2>6. Children's Privacy</h2>

      <p>
        The Service is not intended for use by anyone under the age of 13. We do
        not knowingly collect personal information from children. If you are a
        parent or guardian and you are aware that your child has provided us
        with personal data, please contact us so we can take steps to remove
        that information.
      </p>

      <h2>7. Changes to This Privacy Policy</h2>

      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy within the app or on
        our App Store page. You are advised to review this Privacy Policy
        periodically for any changes.
      </p>

      <h2>8. Contact Us</h2>

      <p>
        If you have any questions about this Privacy Policy, please contact us:
      </p>

      <p>
        <strong>Maksym Slobodianyk</strong>
        <br />
        <a href="mailto:sparesbro.app@gmail.com">sparesbro.app@gmail.com</a>
      </p>
    </PageLayout>
  );
}
