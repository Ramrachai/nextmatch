import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NextuiProvider from '@/components/NextuiProvider';
import Topnav from '@/components/navbar/Topnav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Nextmatch',
    description: 'Matching platform using MERN stack',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Topnav />
                <NextuiProvider>
                    <main className="container mx-auto p-10">{children}</main>
                </NextuiProvider>
            </body>
        </html>
    );
}
