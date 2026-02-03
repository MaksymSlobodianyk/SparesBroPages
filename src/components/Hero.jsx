'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const imageRef = useRef(null);

  useEffect(() => {
    // Preload GIF and swap once loaded
    const img = imageRef.current;
    if (!img) return;

    const gifSrc = '/images/consumables_list.gif';
    const gifImage = new Image();

    gifImage.onload = function () {
      img.src = gifSrc;
    };

    gifImage.src = gifSrc;
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Stop guessing.
            <br />
            <span>Start replacing.</span>
          </h1>
          <p className="hero-subtitle">
            The friendly iOS assistant that tracks your consumables so you don't
            have to. Set it, forget it, and get notified exactly when it's time
            for a fresh start.
          </p>
          <div className="hero-cta-group">
            <a
              href="https://apps.apple.com/cz/app/sparesbro/id6754807916"
              className="app-store-btn"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
              />
            </a>
            <a href="#features" className="hero-secondary-cta">
              See how it works
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="app-screenshot">
            <img
              ref={imageRef}
              src="/images/consumables_list.png"
              alt="SparesBro App - Consumables List"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
