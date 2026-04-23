import Link from 'next/link';

export default function ConfirmationPage({
  searchParams,
}: {
  searchParams: { ref?: string };
}) {
  return (
    <div className="text-center py-20 max-w-lg mx-auto">
      <h1 className="text-3xl font-display mb-4">Thanks for your order.</h1>
      <p className="text-stone-600 mb-2">Your confirmation number is:</p>
      <p className="text-xl font-mono mb-8">{searchParams.ref || '—'}</p>
      <p className="text-stone-600 mb-8">
        We\'ll send you an email as soon as your gear ships. Now go do something with it.
      </p>
      <Link
        href="/products"
        className="inline-block bg-summit-dark text-white px-6 py-3 rounded font-medium hover:bg-summit-green"
      >
        Keep shopping
      </Link>
    </div>
  );
}
