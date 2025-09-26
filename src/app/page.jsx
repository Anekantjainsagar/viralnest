import HomePage from './HomePage';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Viral Nest - Where Brands Fly High At The Best | Digital Agency',
  description:
    'Transform your business with Viral Nest - your all-in-one growth partner. We specialize in web development, mobile app development, AI integration, SEO, social media marketing, and digital transformation services to help brands soar to new heights.',
  keywords:
    'digital agency, web development, mobile app development, AI integration, SEO, social media marketing, brand transformation, viral nest, growth partner, digital marketing',

  openGraph: {
    title: 'Viral Nest - Where Brands Fly High At The Best | Digital Agency',
    description:
      'Transform your business with Viral Nest - your all-in-one growth partner. We specialize in web development, mobile app development, AI integration, SEO, social media marketing, and digital transformation services to help brands soar to new heights.',
  },
};

export default function Page() {
  return (
    <>
      <Toaster position="top-center" />
      <HomePage />
    </>
  );
}
