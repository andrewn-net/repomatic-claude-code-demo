import type { Metadata } from 'next';
import { CartProvider } from '@/lib/cart-context';
import { Header } from '@/components/header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Summit Supply — Gear for the high and wild',
  description: 'Outdoor gear, tested in the field, built to last.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
          <footer className="border-t border-stone-200 bg-white mt-20">
            <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-stone-500">
              Summit Supply · Gear for the high and wild · Demo store
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
