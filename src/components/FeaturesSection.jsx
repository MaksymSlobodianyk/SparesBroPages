export default function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2>
            Two tracking engines.
            <br />
            Zero guesswork.
          </h2>
          <p>
            Not every consumable ages the same way. SparesBro provides two
            distinct tracking logics to match the specific way your items
            expire.
          </p>
        </div>

        <div className="feature-block">
          <div className="feature-visual">
            <div className="tracking-types-split">
              {/* Time-based Card */}
              <div className="tracking-type-card time-based">
                <div className="tracking-type-header">
                  <div className="tracking-type-icon time">
                    <img
                      src="/images/time_based.svg"
                      alt="Time-based icon"
                      style={{
                        width: '36px',
                        height: '36px',
                        display: 'inline-block',
                        verticalAlign: 'middle',
                      }}
                    />
                  </div>
                  <div className="tracking-type-title">
                    <h4>Time-based spare</h4>
                    <p>"I replace this every 4 weeks."</p>
                  </div>
                </div>
                <div className="tracking-type-how">
                  <span>
                    <img
                      src="/images/gears.svg"
                      alt="How it works"
                      style={{
                        width: '20px',
                        height: '20px',
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        marginRight: '6px',
                      }}
                    />
                    How it works
                  </span>
                  <span className="tracking-type-badge time">
                    Replace in 5 days
                  </span>
                </div>
                <p className="tracking-type-desc">
                  Define replacement interval. The app manages the countdown for
                  you, regardless of how often the item is handled.
                </p>
                <div className="tracking-type-examples">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                  </svg>
                  Toothbrushes, kitchen sponges, contact lenses, etc.
                </div>
              </div>

              <div className="tracking-split-divider">
                <span>OR</span>
              </div>

              {/* Usage-based Card */}
              <div className="tracking-type-card usage-based">
                <div className="tracking-type-header">
                  <div className="tracking-type-icon usage">
                    <img
                      src="/images/usage_based.svg"
                      alt="Usage-based icon"
                      style={{
                        width: '24px',
                        height: '24px',
                        display: 'inline-block',
                        verticalAlign: 'middle',
                      }}
                    />
                  </div>
                  <div className="tracking-type-title">
                    <h4>Usage-based spare</h4>
                    <p>"This lasts for 15 uses."</p>
                  </div>
                </div>
                <div className="tracking-type-how">
                  <span>
                    <img
                      src="/images/gears.svg"
                      alt="How it works"
                      style={{
                        width: '20px',
                        height: '20px',
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        marginRight: '6px',
                      }}
                    />
                    How it works
                  </span>
                  <span className="tracking-type-badge usage">Used 3 times</span>
                </div>
                <p className="tracking-type-desc">
                  Set a usage limit. Manually log each use to track wear and
                  tear. Receive notification when you reach the end of its life.
                </p>
                <div className="tracking-type-examples">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                  </svg>
                  Razor blades, vacuum cleaner filters, etc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
