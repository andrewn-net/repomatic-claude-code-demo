'use client';

import { useState } from 'react';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/cart-context';

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-summit-dark text-white px-8 py-3 rounded font-medium hover:bg-summit-green transition-colors"
    >
      {added ? 'Added to cart ✓' : 'Add to cart'}
    </button>
  );
}
