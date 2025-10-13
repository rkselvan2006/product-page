import { useState, useMemo } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import { categories, products } from './data/mockData';
import { Product } from './types';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products.filter(p => p.isFeatured);
    }

    const query = searchQuery.toLowerCase();
    return products.filter(
      p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartCount} onSearchChange={setSearchQuery} />

      {!searchQuery && (
        <>
          <HeroBanner />
          <Categories categories={categories} />
        </>
      )}

      <ProductGrid
        products={filteredProducts}
        title={searchQuery ? `Search Results for "${searchQuery}"` : 'Featured Products'}
        onProductClick={setSelectedProduct}
      />

      {!searchQuery && (
        <ProductGrid
          products={products.filter(p => !p.isFeatured)}
          title="More Products"
          onProductClick={setSelectedProduct}
        />
      )}

      <Footer />

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default App;
