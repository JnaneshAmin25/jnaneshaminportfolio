import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from "@/public/Helper/ScrollToTop";
import Head from 'next/head';
import { projects } from "@/data/projects";
import BackButton from '../animatedComponents/BAckButton';
import ClientLayout from "./ClientLayout";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] });
export const dynamic = 'auto';

export const metadata: Metadata = {
  title: 'Jnanesh Amin | Portfolio',
  description: 'Personal portfolio of Jnanesh Amin',
  icons: {
    icon: '/icons/app-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {projects.map((project) => (
          <link 
            key={project.id} 
            rel="preload" 
            href={`/projects/${project.id}`} 
            as="document" 
          />
        ))}
      </Head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <Navbar />
        <BackButton /> 
        <main className="min-h-screen pt-16">
          <ClientLayout> 
            {children} 
            <Analytics />
          </ClientLayout> 
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}