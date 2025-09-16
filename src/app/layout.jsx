import '../styles/index.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: {
    default: 'Viral Nest - Digital Agency',
    template: 'Viral Nest | %s',
  },
  description: 'Viral Nest is a premier digital agency where brands fly high at the best. We specialize in web development, mobile app development, and digital transformation services.',
  keywords: 'digital agency, web development, mobile app development, brand transformation, digital marketing, viral nest',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'Viral Nest - Digital Agency',
      template: 'Viral Nest | %s',
    },
    description: 'Transform your digital presence with Viral Nest - where brands fly high at the best. Expert web development and mobile app solutions.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}<script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fanekants9303back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.8"></script>
</body>
    </html>
  )
}