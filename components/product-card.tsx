import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-white rounded-lg overflow-hidden border border-stone-200 hover:border-summit-dark transition-colors"
    >
      <div className="aspect-[4/3] bg-stone-100 relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-stone-500 mb-1">
          {product.category}
        </div>
        <h3 className="font-display text-lg text-summit-dark mb-1">{product.name}</h3>
        <div className="text-stone-700">${product.price}</div>
      </div>
    </Link>
  );
}
