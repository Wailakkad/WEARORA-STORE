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
    image: '/new11.jpg',
    href: '/product/essential-oversized-hoodie'
  },
  {
    id: '2',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/Frame12.jpg',
    href: '/product/essential-oversized-hoodie-sage'
  },
  {
    id: '3',
    title: 'Essential Cut-Sew Hoodie',
    price: 109,
    image: '/f22.jpg',
    href: '/product/essential-cut-sew-hoodie'
  },
  {
    id: '4',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/streett.jpg',
    href: '/product/essential-oversized-hoodie-taupe'
  },
  {
    id: '5',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/au33.jpg',
    href: '/product/essential-oversized-hoodie-cream'
  }
];

export const everyday: Product[] = [
  {
    id: '6',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/Fame1.jpg',
    href: '/product/essential-oversized-hoodie-charcoal'
  },
  {
    id: '7',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/Fame2.jpg',
    href: '/product/essential-oversized-hoodie-olive'
  },
  {
    id: '8',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/Fame3.jpg',
    href: '/product/essential-oversized-hoodie-sand'
  },
  {
    id: '9',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/Fame4.jpg',
    href: '/product/essential-oversized-hoodie-mocha'
  },
  {
    id: '10',
    title: 'Essential Oversized Hoodie',
    price: 89,
    image: '/styducut.jpg',
    href: '/product/essential-oversized-hoodie-mocha'
  }
];