import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ToasterContext from './context/ToasterContext';
import AuthContextProvider from './context/AuthContext';
import ActiveStatus from './components/ActiveStatus';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BEC Alumni - Connect with Bapatla Engineering College Alumni',
  description:
    'BEC Alumni is the ultimate platform to connect with alumni from Bapatla Engineering College. Engage in meaningful conversations, collaborate on projects, and stay connected with your Bapatla network. Join BEC Alumni Chat today and experience a seamless communication platform!',
  keywords: [
    'BEC Alumni',
    'Bapatla',
    'Bapatla Engineering College',
    'BEC College',
    'BEC-Alumni',
    'BEC Chat',
    'Bapatla Alumni Network',
    'Bapatla College Chat',
    'Bapatla Engineering Alumni',
    'BEC Engineering',
    'BEC Alumni Platform',
    'Bapatla College Alumni',
    'Bapatla Networking',
    'Connect BEC Alumni',
    'BEC Community',
    'BEC Messaging App',
    'Engineering Alumni Network',
    'BEC Collaboration',
    'Bapatla Engineering Community',
  ],
  openGraph: {
    title: 'BEC Alumni - Connect with Bapatla Engineering College Alumni',
    description:
      'BEC Alumni is your go-to platform to stay connected with Bapatla Engineering College alumni. Start engaging conversations, build connections, and relive your college memories!',
    url: 'https://yourwebsite.com', // Replace with the actual website URL
    type: 'website',
    images: [
      {
        url: '/images/logo.png', // Add the correct path to your thumbnail image
        alt: 'BEC Alumni Platform',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
