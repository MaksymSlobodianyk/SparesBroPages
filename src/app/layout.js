import './globals.css';

export const metadata = {
  title: 'SparesBro - Stop guessing. Start replacing.',
  description:
    "The friendly iOS assistant that tracks your consumables so you don't have to. Set it, forget it, and get notified exactly when it's time.",
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
