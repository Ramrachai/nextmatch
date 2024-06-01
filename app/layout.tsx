import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NextuiProvider from '@/components/NextuiProvider';
import Topnav from '@/components/navbar/Topnav';
import ResponsiveNav from '../components/navbar/ResponsiveNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Jumene',
    description:
        'An Ecommerce platform for smart enterprenuers based in khagrachari, Bangladesh',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextuiProvider>
                    <ResponsiveNav />
                    <main className="container mx-auto p-10">{children}</main>
                </NextuiProvider>
            </body>
        </html>
    );
}
