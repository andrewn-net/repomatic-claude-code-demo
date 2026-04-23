export type Product = {
  slug: string;
  name: string;
  category: 'shelter' | 'apparel' | 'footwear' | 'accessories';
  price: number;
  description: string;
  image: string;
  stock: number;
};

export const products: Product[] = [
  {
    slug: 'alpine-dome-2',
    name: 'Alpine Dome 2-Person Tent',
    category: 'shelter',
    price: 389,
    description:
      'A lightweight four-season shelter built for wind-scoured ridges and open plateaus. Aluminum poles, double-wall construction, and a vestibule big enough for two packs.',
    image: 'https://picsum.photos/seed/tent/800/600',
    stock: 12,
  },
  {
    slug: 'pathfinder-45-pack',
    name: 'Pathfinder 45L Pack',
    category: 'accessories',
    price: 215,
    description:
      'The pack that disappears on your back. A trimmed-down 45-liter weekend carrier with a floating lid, hip-belt pockets, and a suspension system that breathes.',
    image: 'https://picsum.photos/seed/pack/800/600',
    stock: 24,
  },
  {
    slug: 'ridge-shell-jacket',
    name: 'Ridge Shell Jacket',
    category: 'apparel',
    price: 299,
    description:
      'A three-layer waterproof shell for shoulder-season storms. Fully seam-sealed, pit-zipped, and cut for layering over a midweight fleece.',
    image: 'https://picsum.photos/seed/jacket/800/600',
    stock: 18,
  },
  {
    slug: 'basecamp-boot',
    name: 'Basecamp Approach Boot',
    category: 'footwear',
    price: 245,
    description:
      'A sticky-soled approach boot with enough torsional rigidity for light scrambling and enough give for long trail miles. Full-grain leather upper.',
    image: 'https://picsum.photos/seed/boot/800/600',
    stock: 16,
  },
  {
    slug: 'hearth-down-hoody',
    name: 'Hearth 800-Fill Down Hoody',
    category: 'apparel',
    price: 329,
    description:
      'Responsibly sourced 800-fill down in a cut you can actually layer under a shell. A belay jacket that packs into its own pocket.',
    image: 'https://picsum.photos/seed/down/800/600',
    stock: 9,
  },
  {
    slug: 'summit-headlamp',
    name: 'Summit 500-Lumen Headlamp',
    category: 'accessories',
    price: 59,
    description:
      'USB-C rechargeable, five brightness modes, and a red-light mode that won\'t nuke your night vision in a shared tent.',
    image: 'https://picsum.photos/seed/headlamp/800/600',
    stock: 42,
  },
  {
    slug: 'trail-runner-gtx',
    name: 'Trail Runner GTX',
    category: 'footwear',
    price: 175,
    description:
      'A waterproof trail runner with a rock plate, a sticky outsole, and enough cushion to carry you through a hundred-mile week without complaint.',
    image: 'https://picsum.photos/seed/trailrun/800/600',
    stock: 21,
  },
  {
    slug: 'ember-stove',
    name: 'Ember Integrated Canister Stove',
    category: 'accessories',
    price: 139,
    description:
      'Boils a liter in under three minutes. Self-sealing regulator performs down to freezing. Nests inside its own 1L pot.',
    image: 'https://picsum.photos/seed/stove/800/600',
    stock: 14,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProducts(): Product[] {
  return products;
}
