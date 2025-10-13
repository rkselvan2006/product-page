import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  title: string;
  onProductClick: (product: Product) => void;
}

export default function ProductGrid({ products, title, onProductClick }: ProductGridProps) {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">{title}</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
