import { Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={() => onClick(product)}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-[#2874f0] group"
    >
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded text-xs font-semibold">
            {product.rating.toFixed(1)}
            <Star className="w-3 h-3 fill-current" />
          </div>
          <span className="text-gray-500 text-xs">
            ({product.reviewsCount.toLocaleString()})
          </span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl font-bold text-gray-900">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>
          <span className="text-sm font-semibold text-green-600">
            {product.discountPercentage}% off
          </span>
        </div>

        <p className="text-xs text-gray-600 mb-2">{product.brand}</p>

        {product.offers.length > 0 && (
          <p className="text-xs text-green-700 font-medium">
            {product.offers[0]}
          </p>
        )}
      </div>
    </div>
  );
}
