export const categories = [
  {
    id: 'books',
    name: 'Bookish Corner',
    slug: 'books',
    description: 'Mood-lifting reads and mystery book moments',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'drinkware',
    name: 'The Pink Sip Collection',
    slug: 'drinkware',
    description: 'Cute cups, tumblers and bubbly sips',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'stationery',
    name: 'Stationery',
    slug: 'stationery',
    description: 'Pens, journals and all things paper pretty',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'accessories',
    name: 'Cute Accessories',
    slug: 'accessories',
    description: 'Tiny details that make every outfit adorable',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'home-lifestyle',
    name: 'Home & Lifestyle',
    slug: 'home-lifestyle',
    description: 'Soft corners and pretty little rituals',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'gift-hampers',
    name: 'Gift Hampers',
    slug: 'gift-hampers',
    description: 'Thoughtful curated gifting sets',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80'
  }
];

export const products = [
  {
    id: 'blind-date-book',
    name: 'Blind Date With a Mystery Book',
    category: 'books',
    price: 899,
    originalPrice: 1099,
    badge: 'Bestseller',
    stock: 24,
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A mystery English novel wrapped in kraft paper with a dusty-pink satin ribbon, magnetic bookmark, sticker sheet and reading ritual card.',
    details: { color: ['Dusty Pink', 'Cream'], size: ['Single', 'Gift Set'] },
    shippingInfo: 'Ships in 2-4 days. The title and cover stay secret until unwrapping.'
  },
  {
    id: 'magnetic-bookmarks',
    name: 'Magnetic Bookmarks',
    category: 'books',
    price: 349,
    badge: 'New Arrival',
    stock: 40,
    images: ['https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80'],
    description: 'Charming bookmark sets to keep your reading moments cute and organised.',
    details: { color: ['Rose', 'Blush'], size: ['Set of 2'] },
    shippingInfo: 'Packed carefully to prevent bending during dispatch.'
  },
  {
    id: 'book-stickers',
    name: 'Book-Themed Sticker Sheet',
    category: 'books',
    price: 249,
    stock: 52,
    images: ['https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'],
    description: 'A cute sheet of reading-inspired stickers for planners, journals and laptops.',
    details: { color: ['Pastel Pink'], size: ['A5 Sheet'] },
    shippingInfo: 'Ships in 3-5 days.'
  },
  {
    id: 'reading-journal',
    name: 'Reading Journal',
    category: 'books',
    price: 699,
    stock: 18,
    images: ['https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80'],
    description: 'Track your TBR, thoughts and favourite quotes in this dreamy reading journal.',
    details: { color: ['Ivory', 'Dusty Pink'], size: ['Hardcover', 'Softcover'] },
    shippingInfo: 'Carefully packed and ready to gift.'
  },
  {
    id: 'strawberry-glass-can',
    name: 'Strawberry Glass Can with Bamboo Lid and Straw',
    category: 'drinkware',
    price: 899,
    originalPrice: 1099,
    badge: 'Bestseller',
    stock: 30,
    images: ['https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80'],
    description: 'A charming glass can with a sturdy bamboo lid and sip straw, made for everyday hydration and gifting.',
    details: { color: ['Strawberry Pink'], size: ['350 ml'] },
    shippingInfo: 'Fragile drinkware is packed carefully for shipping.'
  },
  {
    id: 'cherry-tumbler',
    name: 'Cherry-Themed Glass Tumbler',
    category: 'drinkware',
    price: 1099,
    stock: 12,
    images: ['https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80'],
    description: 'A mini feature piece for iced coffees, mocktails and dreamy room vibes.',
    details: { color: ['Cherry Pink'], size: ['350 ml'] },
    shippingInfo: 'Fragile drinkware is packed carefully for shipping.'
  },
  {
    id: 'coquette-mug',
    name: 'Coquette Bow Glass Mug',
    category: 'drinkware',
    price: 799,
    stock: 21,
    images: ['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80'],
    description: 'A soft pink mug with a cute bow detail, perfect for tea, cocoa and gift boxes.',
    details: { color: ['Blush'], size: ['260 ml'] },
    shippingInfo: 'Fragile drinkware is packed carefully for shipping.'
  },
  {
    id: 'flower-mug',
    name: 'Flower Handle Ceramic Mug',
    category: 'drinkware',
    price: 849,
    stock: 19,
    images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80'],
    description: 'A floral ceramic mug styled for a dreamy tea ritual and gifting moments.',
    details: { color: ['Blush Pink'], size: ['300 ml'] },
    shippingInfo: 'Fragile drinkware is packed carefully for shipping.'
  },
  {
    id: 'aesthetic-notebook',
    name: 'Aesthetic Notebook',
    category: 'stationery',
    price: 499,
    badge: 'New Arrival',
    stock: 70,
    images: ['https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80'],
    description: 'An ivory notebook with soft pink details for planners, journaling and to-do lists.',
    details: { color: ['Ivory', 'Rose'], size: ['A5', 'B6'] },
    shippingInfo: 'Ships in 2-4 days.'
  },
  {
    id: 'sticker-sheets',
    name: 'Sticker Sheets',
    category: 'stationery',
    price: 299,
    stock: 50,
    images: ['https://images.unsplash.com/photo-1528747045269-390fe33c19f2?auto=format&fit=crop&w=900&q=80'],
    description: 'A glossy pack of stationery stickers for planners, laptop covers and letters.',
    details: { color: ['Pastel'], size: ['Set of 8'] },
    shippingInfo: 'Ships in 3-5 days.'
  },
  {
    id: 'pastel-pens',
    name: 'Pastel Pens',
    category: 'stationery',
    price: 329,
    stock: 64,
    images: ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80'],
    description: 'Soft-hued writing pens for journaling, notes and everyday cute desk setups.',
    details: { color: ['Pink', 'Lilac'], size: ['Pack of 5'] },
    shippingInfo: 'Ships in 2-4 days.'
  },
  {
    id: 'plush-keychain',
    name: 'Plush Keychains',
    category: 'accessories',
    price: 329,
    stock: 80,
    images: ['https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'],
    description: 'Cute plush keychains that add softness to daily essentials and bags.',
    details: { color: ['Blush', 'Cream'], size: ['Small'] },
    shippingInfo: 'Ships in 3-5 days.'
  },
  {
    id: 'scrunchies',
    name: 'Scrunchies Set',
    category: 'accessories',
    price: 399,
    stock: 45,
    images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80'],
    description: 'A soft pastel scrunchie pack for effortless, feminine styling.',
    details: { color: ['Pastel Pink'], size: ['Set of 4'] },
    shippingInfo: 'Ships in 3-5 days.'
  },
  {
    id: 'flower-coaster',
    name: 'Flower Coasters',
    category: 'home-lifestyle',
    price: 549,
    stock: 34,
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'],
    description: 'Decorative floral coasters to dress up your dreamy home corners.',
    details: { color: ['Cream', 'Blush'], size: ['Set of 4'] },
    shippingInfo: 'Ships in 2-4 days.'
  },
  {
    id: 'decorative-candle',
    name: 'Decorative Candle',
    category: 'home-lifestyle',
    price: 799,
    stock: 22,
    images: ['https://images.unsplash.com/photo-1602872029701-84d1e0f5d0d6?auto=format&fit=crop&w=900&q=80'],
    description: 'A subtle scent and cozy glow for self-care and curated gifting moments.',
    details: { color: ['Rose'], size: ['180 g'] },
    shippingInfo: 'Ships in 2-4 days.'
  },
  {
    id: 'book-lover-box',
    name: 'Book Lover Gift Box',
    category: 'gift-hampers',
    price: 1799,
    originalPrice: 2199,
    badge: 'Gift Favourite',
    stock: 15,
    images: ['https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80'],
    description: 'A curated little indulgence with a mystery read, bookmark, journal and accessories.',
    details: { color: ['Rose Pink'], size: ['Standard'] },
    shippingInfo: 'Beautifully packed and ready for gifting.'
  },
  {
    id: 'best-friend-box',
    name: 'Best Friend Gift Box',
    category: 'gift-hampers',
    price: 2199,
    stock: 11,
    images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'],
    description: 'A party-in-a-box for thoughtful surprises, sweet notes and cozy little goodies.',
    details: { color: ['Blush'], size: ['Medium'] },
    shippingInfo: 'Beautifully packed and ready for gifting.'
  }
];

export const featuredProducts = ['blind-date-book', 'strawberry-glass-can', 'aesthetic-notebook', 'book-lover-box'];

export function formatPrice(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Number(value || 0));
}
