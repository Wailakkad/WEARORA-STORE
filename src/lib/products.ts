export type Product = {
  id: string;
  title: string;
  price: number; // in USD
  image: string; // /images/filename.jpg
  href: string;  // /product/slug
};

export const newArrivals: Product[] = [
  {
    id: '1',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/Frame 16.jpg',
    href: '/product/essential-oversized-hoodie'
  },
  {
    id: '2',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/new-2.jpeg',
    href: '/product/essential-oversized-hoodie-sage'
  },
  {
    id: '3',
    title: 'Essential Cut-Sew Hoodie',
    price: 109,
    image: '/new-3.jpeg',
    href: '/product/essential-cut-sew-hoodie'
  },
  {
    id: '4',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/new-4.jpeg',
    href: '/product/essential-oversized-hoodie-taupe'
  },
  {
    id: '5',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/new-5.jpeg',
    href: '/product/essential-oversized-hoodie-cream'
  }
];

export const everyday: Product[] = [
  {
    id: '6',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/everyday-1.png',
    href: '/product/essential-oversized-hoodie-charcoal'
  },
  {
    id: '7',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/everyday-2.jpeg',
    href: '/product/essential-oversized-hoodie-olive'
  },
  {
    id: '8',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/everyday-3.jpeg',
    href: '/product/essential-oversized-hoodie-sand'
  },
  {
    id: '9',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/everyday-4.jpeg',
    href: '/product/essential-oversized-hoodie-mocha'
  },
  {
    id: '10',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/everyday-5.jpeg',
    href: '/product/essential-oversized-hoodie-mocha'
  }
];