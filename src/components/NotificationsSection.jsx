const notifications = [
  {
    title: 'Razor blade is running low',
    message:
      "You're almost out of Razor Philips. Might wanna restock before you're completely dry 😅",
  },
  {
    title: 'Did you forget to replace Water filter?',
    message:
      "Looks like your Water filter still hasn't been replaced. No worries, get it sorted when you can 👊",
  },
  {
    title: 'Time to swap your Air filter',
    message: 'Your Air filter is due today. Knock it out and mark it done 💪',
  },
];

export default function NotificationsSection() {
  return (
    <section className="notifications-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Customizable Notifications</span>
          <h2>Right on time every time.</h2>
          <p>
            No spam, no noise, just helpful nudges. Customize your alerts to
            stay organized and skip the 'Oops' moment.
          </p>
        </div>

        <div className="feature-block">
          <div className="feature-visual">
            <div className="ios-notification-wrapper">
              <div className="notification-stack">
                {notifications.map((notif, index) => (
                  <div className="notification-card" key={index}>
                    <div className="notif-icon">
                      <img src="/logo.png" alt="SparesBro" />
                    </div>
                    <div className="notif-content">
                      <div className="notif-header">
                        <h4>{notif.title}</h4>
                        <span className="notif-time">1m ago</span>
                      </div>
                      <p>{notif.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="feature-content">
            <ul className="feature-bullets">
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M20 6L9 17L4 12" />
                </svg>
                Get only the notifications you need
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M20 6L9 17L4 12" />
                </svg>
                Schedule notifications your way
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M20 6L9 17L4 12" />
                </svg>
                Adjust notification frequency
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
