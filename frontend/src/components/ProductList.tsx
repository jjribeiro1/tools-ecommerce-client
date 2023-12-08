import ProductCard from './ProductCard';
import { Product } from '@/types/product';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <ul className="grid place-content-center md:place-content-start min-[500px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4 px-4">
      {products?.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </ul>
  );
}
