import Link from 'next/link';
import { getProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

export default function HomePage() {
  const featured = getProducts().slice(0, 4);

  return (
    <div className="space-y-16">
      <section className="relative bg-summit-dark text-white rounded-xl overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://picsum.photos/seed/hero/1600/600')] bg-cover bg-center" />
        <div className="relative px-10 py-20 max-w-2xl">
          <h1 className="text-5xl font-display mb-4">Gear for the high and wild.</h1>
          <p className="text-lg text-stone-200 mb-8">
            Field-tested outdoor gear, built to outlast the people who design it.
            Free shipping on orders over $150.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-summit-dark px-6 py-3 rounded font-medium hover:bg-stone-100"
          >
            Shop the range
          </Link>
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-display">Featured gear</h2>
          <Link href="/products" className="text-sm text-stone-600 hover:text-summit-dark">
            See all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
