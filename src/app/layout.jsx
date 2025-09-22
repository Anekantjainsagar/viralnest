import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'Viral Nest - Digital Agency',
    template: 'Viral Nest | %s',
  },
  description:
    'Viral Nest is a premier digital agency where brands fly high at the best. We specialize in web development, mobile app development, and digital transformation services.',
  keywords:
    'digital agency, web development, mobile app development, brand transformation, digital marketing, viral nest',

  // Favicon configuration
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },

  // Web App Manifest
  manifest: '/site.webmanifest',

  openGraph: {
    type: 'website',
    title: {
      default: 'Viral Nest - Digital Agency',
      template: 'Viral Nest | %s',
    },
    description:
      'Transform your digital presence with Viral Nest - where brands fly high at the best. Expert web development and mobile app solutions.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Viral Nest" />
        <meta name="application-name" content="Viral Nest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {children}
        <script
          type="module"
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fanekants9303back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.8"
        />
      </body>
    </html>
  );
}
