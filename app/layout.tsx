import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NextuiProvider from '@/components/NextuiProvider';

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
                <NextuiProvider>{children}</NextuiProvider>
            </body>
        </html>
    );
}
