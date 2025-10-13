// products.tsx
export interface Product {
  id: string;
  name: string;
  images: string[];
  originalPrice: number;
  price: number;
  rating: number;
  discountPercentage: number;
  deliveryUpto: string;
  stockLeft?: number; // optional if not always available
}

export const Products: Product[] = [
  {
    id: '1',
    name: 'Fresh Organic Apples (1kg)',
    images: [
      'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80',
    ],
    originalPrice: 180,
    price: 180 * (1 - 15 / 100),
    rating: 4.7,
    discountPercentage: 15,
    deliveryUpto: 'Tomorrow',
    stockLeft: 5,
  },
  {
    id: '2',
    name: 'Farm Bananas (1 dozen)',
    images: [
      'https://images.unsplash.com/photo-1574226516831-e1dff420e16d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1574226516831-e1dff420e16d?auto=format&fit=crop&w=400&q=80',
    ],
    originalPrice: 90,
    price: 90 * (1 - 10 / 100),
    rating: 4.5,
    discountPercentage: 10,
    deliveryUpto: 'Today',
    stockLeft: 10,
  },
  {
    id: '3',
    name: 'Organic Broccoli (500g)',
    images: [
      'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80',
    ],
    originalPrice: 60,
    price: 60 * (1 - 8 / 100),
    rating: 4.6,
    discountPercentage: 8,
    deliveryUpto: 'Tomorrow',
    stockLeft: 8,
  },
  {
    id: '4',
    name: 'Green Seedless Grapes (500g)',
    images: [
      'https://images.unsplash.com/photo-1510626176961-4b4e0f0b02b8?auto=format&fit=crop&w=400&q=80',
    ],
    originalPrice: 99,
    price: 99,
    rating: 4.6,
    discountPercentage: 0,
    deliveryUpto: 'Tomorrow',
  },
  {
    id: '5',
    name: 'Fresh Carrots (1kg)',
    images: [
      'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    ],
    originalPrice: 60,
    price: 60 * (1 - 10 / 100),
    rating: 4.7,
    discountPercentage: 10,
    deliveryUpto: 'Tomorrow',
  },
  {
    id: '6',
    name: 'Tomato (500g)',
    images: [
      'https://images.unsplash.com/photo-1582515073490-d87f32f35f18?auto=format&fit=crop&w=400&q=80',
    ],
    originalPrice: 45,
    price: 45 * (1 - 10 / 100),
    rating: 4.5,
    discountPercentage: 10,
    deliveryUpto: 'Tomorrow',
  },
  {
    id: '7',
    name: 'Sweet Corn (2 pcs)',
    images: [
      'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?auto=format&fit=crop&w=400&q=80',
    ],
    originalPrice: 52,
    price: 52 * (1 - 8 / 100),
    rating: 4.2,
    discountPercentage: 8,
    deliveryUpto: 'Tomorrow',
  },
];
