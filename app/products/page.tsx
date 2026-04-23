import { getProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

export default function ProductsPage() {
  const products = getProducts();
  return (
    <div>
      <h1 className="text-3xl font-display mb-2">The range</h1>
      <p className="text-stone-600 mb-8">
        Every piece in our catalog, tested in places you\'ve probably never heard of.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
