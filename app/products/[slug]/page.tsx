import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProduct, getProducts } from '@/lib/products';
import { AddToCartButton } from '@/components/add-to-cart-button';

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="aspect-square bg-stone-100 rounded-lg relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wide text-stone-500 mb-2">
          {product.category}
        </div>
        <h1 className="text-3xl font-display text-summit-dark mb-3">{product.name}</h1>
        <div className="text-2xl text-stone-800 mb-6">${product.price}</div>
        <p className="text-stone-700 leading-relaxed mb-8">{product.description}</p>
        <div className="mb-6 text-sm text-stone-500">
          {product.stock > 5
            ? 'In stock'
            : product.stock > 0
              ? `Only ${product.stock} left`
              : 'Out of stock'}
        </div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
