'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-display mb-4">Your cart is empty</h1>
        <p className="text-stone-600 mb-8">Nothing beats an empty pack. But also, you can\'t check out.</p>
        <Link
          href="/products"
          className="inline-block bg-summit-dark text-white px-6 py-3 rounded font-medium hover:bg-summit-green"
        >
          Go shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-display mb-8">Your cart</h1>
      <div className="space-y-4 mb-8">
        {items.map((item) => (
          <div
            key={item.product.slug}
            className="flex gap-4 bg-white border border-stone-200 rounded-lg p-4"
          >
            <div className="w-24 h-24 relative bg-stone-100 rounded flex-shrink-0">
              <Image
                src={item.product.image}
                alt={item.product.name}
                fill
                className="object-cover rounded"
                sizes="96px"
              />
            </div>
            <div className="flex-1">
              <Link
                href={`/products/${item.product.slug}`}
                className="font-display text-lg text-summit-dark hover:underline"
              >
                {item.product.name}
              </Link>
              <div className="text-sm text-stone-600 mt-1">${item.product.price} each</div>
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => updateQuantity(item.product.slug, item.quantity - 1)}
                  className="w-8 h-8 border border-stone-300 rounded hover:bg-stone-50"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.slug, item.quantity + 1)}
                  className="w-8 h-8 border border-stone-300 rounded hover:bg-stone-50"
                  aria-label="Increase quantity"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.product.slug)}
                  className="ml-4 text-sm text-stone-500 hover:text-stone-800"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="text-lg font-medium">
              ${(item.product.price * item.quantity).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-stone-200 pt-6 flex items-center justify-between">
        <div>
          <div className="text-sm text-stone-600">Subtotal</div>
          <div className="text-2xl font-medium">${subtotal.toLocaleString()}</div>
        </div>
        <Link
          href="/checkout"
          className="bg-summit-dark text-white px-8 py-3 rounded font-medium hover:bg-summit-green"
        >
          Checkout →
        </Link>
      </div>
    </div>
  );
}
