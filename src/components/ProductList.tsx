import ProductCard from './ProductCard';
import { Product } from '@/types/product';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-2">
      {products?.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </ul>
  );
}
