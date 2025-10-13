import { Star, X, ShoppingCart, Zap, MapPin, Tag } from 'lucide-react';
import { Product } from '../types';
import { useState } from 'react';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
}

export default function ProductDetail({ product, onClose, onAddToCart }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen flex items-start justify-center p-4 pt-20">
        <div className="bg-white rounded-lg max-w-6xl w-full relative shadow-2xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
            <div className="space-y-4">
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-3 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-[#2874f0]'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={onAddToCart}
                  className="flex-1 bg-[#ff9f00] hover:bg-[#e68a00] text-white font-semibold py-3 px-6 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  ADD TO CART
                </button>
                <button className="flex-1 bg-[#fb641b] hover:bg-[#e05510] text-white font-semibold py-3 px-6 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                  <Zap className="w-5 h-5 fill-current" />
                  BUY NOW
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="flex items-center gap-4 pb-4 border-b">
                <div className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded">
                  {product.rating.toFixed(1)}
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-gray-600">
                  {product.reviewsCount.toLocaleString()} Ratings & Reviews
                </span>
              </div>

              <div className="space-y-2 pb-4 border-b">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-lg font-semibold text-green-600">
                    {product.discountPercentage}% off
                  </span>
                </div>
              </div>

              <div className="space-y-3 pb-4 border-b">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-green-600" />
                  Available Offers
                </h3>
                {product.offers.map((offer, index) => (
                  <div key={index} className="flex gap-2 text-sm">
                    <span className="text-green-600 font-semibold">•</span>
                    <span className="text-gray-700">{offer}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pb-4 border-b">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#2874f0]" />
                  Delivery Options
                </h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>Free delivery on orders above ₹500</p>
                  <p>Delivery by 3-5 days</p>
                  <p>Cash on Delivery available</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Specifications</h3>
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex text-sm">
                      <span className="text-gray-600 w-32 flex-shrink-0">{key}</span>
                      <span className="text-gray-900 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 pt-4 border-t">
                <span className="font-semibold">Brand:</span>
                <span>{product.brand}</span>
              </div>

              {product.stock < 10 && product.stock > 0 && (
                <div className="bg-red-50 border border-red-200 rounded p-3 text-sm text-red-700">
                  Hurry! Only {product.stock} left in stock
                </div>
              )}

              {product.stock === 0 && (
                <div className="bg-gray-100 border border-gray-300 rounded p-3 text-sm text-gray-700 font-semibold">
                  Out of Stock
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
