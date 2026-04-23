'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export function Header() {
  const { itemCount } = useCart();

  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-summit-dark">Summit Supply</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/products" className="text-sm text-stone-700 hover:text-summit-dark">
            Shop
          </Link>
          <Link
            href="/cart"
            className="relative text-sm text-stone-700 hover:text-summit-dark"
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-5 bg-summit-dark text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
