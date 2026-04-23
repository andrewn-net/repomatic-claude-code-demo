'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { processPayment } from '@/lib/payment';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clear } = useCart();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const [form, setForm] = useState({
    name: 'Demo Buyer',
    email: 'demo.buyer@example.com',
    address: '123 Summit Trail',
    city: 'Denver',
    zip: '80202',
    cardNumber: '4000 0000 0000 0002',
    expiry: '12/34',
    cvc: '123',
    nameOnCard: 'Demo Buyer',
  });

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-display mb-4">Nothing to check out</h1>
        <Link href="/products" className="text-summit-dark underline">
          Browse the range
        </Link>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setProcessing(true);
    try {
      const result = await processPayment({
        cardNumber: form.cardNumber,
        expiry: form.expiry,
        cvc: form.cvc,
        nameOnCard: form.nameOnCard,
        amount: subtotal,
      });
      clear();
      router.push(`/checkout/confirmation?ref=${result.confirmationNumber}`);
    } catch (err) {
      setError(
        "We weren't able to complete your order. Please try again, or contact support if the problem persists.",
      );
      setProcessing(false);
    }
  }

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
      <form onSubmit={handleSubmit} className="space-y-8">
        <h1 className="text-3xl font-display">Checkout</h1>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Shipping</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Full name" value={form.name} onChange={(v) => update('name', v)} required />
            <Input label="Email" type="email" value={form.email} onChange={(v) => update('email', v)} required />
            <Input label="Address" className="sm:col-span-2" value={form.address} onChange={(v) => update('address', v)} required />
            <Input label="City" value={form.city} onChange={(v) => update('city', v)} required />
            <Input label="ZIP / Postcode" value={form.zip} onChange={(v) => update('zip', v)} required />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Payment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Name on card" className="sm:col-span-2" value={form.nameOnCard} onChange={(v) => update('nameOnCard', v)} required />
            <Input label="Card number" className="sm:col-span-2" value={form.cardNumber} onChange={(v) => update('cardNumber', v)} placeholder="4242 4242 4242 4242" required />
            <Input label="Expiry" value={form.expiry} onChange={(v) => update('expiry', v)} placeholder="MM/YY" required />
            <Input label="CVC" value={form.cvc} onChange={(v) => update('cvc', v)} placeholder="123" required />
          </div>
        </section>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded px-4 py-3 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={processing}
          className="bg-summit-dark text-white px-8 py-3 rounded font-medium hover:bg-summit-green disabled:opacity-60"
        >
          {processing ? 'Processing...' : `Place order — $${subtotal.toLocaleString()}`}
        </button>
      </form>

      <aside className="bg-white border border-stone-200 rounded-lg p-6 h-fit sticky top-6">
        <h2 className="font-medium mb-4">Order summary</h2>
        <div className="space-y-2 mb-4 pb-4 border-b border-stone-200">
          {items.map((item) => (
            <div key={item.product.slug} className="flex justify-between text-sm">
              <span className="text-stone-700">
                {item.product.name} × {item.quantity}
              </span>
              <span>${(item.product.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>${subtotal.toLocaleString()}</span>
        </div>
      </aside>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  required,
  className,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className || ''}`}>
      <span className="block text-sm text-stone-700 mb-1">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full border border-stone-300 rounded px-3 py-2 focus:outline-none focus:border-summit-dark"
      />
    </label>
  );
}
