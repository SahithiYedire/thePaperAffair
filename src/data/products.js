export const categories = [
  {
    id: 'books',
    name: 'Blind Date with a Book',
    slug: 'books',
    description: 'A little mystery, wrapped with love.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'drinkware',
    name: 'Glass Tumblers',
    slug: 'drinkware',
    description: 'A pretty everyday companion for your favourite sips.',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80'
  }
];

// Pre-launch catalogue: update launchStatus and stock only after products are in hand
// and the photos, specifications, pricing, and inventory have been verified.
export const products = [
  {
    id: 'blind-date-book',
    name: 'Blind Date with a Book',
    category: 'books',
    price: 899,
    badge: 'Coming soon',
    launchStatus: 'coming-soon',
    stock: 6,
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A mystery English novel, wrapped in kraft paper with a dusty-pink satin ribbon. The planned gift set includes a magnetic bookmark, book-themed sticker sheet and reading ritual card.',
    details: { size: ['Gift Set'], color: ['Dusty Pink'] },
    shippingInfo: 'Launch details and shipping estimates will be shared once the product is ready.',
    imageNote: 'Sample inspiration image only. It is not a photograph of the actual product.'
  },
  {
    id: 'glass-tumbler',
    name: 'Glass Tumblers',
    category: 'drinkware',
    price: 899,
    badge: 'Coming soon',
    launchStatus: 'coming-soon',
    stock: 6,
    images: [
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Lovely glass tumblers planned for everyday sips and thoughtful gifting. Product specifications and final details will be confirmed when inventory arrives.',
    details: { size: ['Details coming soon'], color: ['Details coming soon'] },
    shippingInfo: 'Fragile drinkware will be packed carefully for shipping. Launch and delivery details will be confirmed before orders open.',
    imageNote: 'Sample inspiration image only. It is not a photograph of the actual product.'
  }
];

export const featuredProducts = products.map((product) => product.id);

export function formatPrice(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Number(value || 0));
}
