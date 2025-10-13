import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onSearchChange: (query: string) => void;
}

export default function Header({ cartCount, onSearchChange }: HeaderProps) {
  return (
    <header className="bg-[#2874f0] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center cursor-pointer">
              <h1 className="text-white font-bold text-xl md:text-2xl italic">Flipkart</h1>
              <span className="text-yellow-400 text-xs ml-1">Explore <span className="text-white">Plus</span></span>
            </div>
          </div>

          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full px-4 py-2.5 pr-12 rounded-sm focus:outline-none text-sm"
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2874f0] w-5 h-5" />
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <button className="flex items-center gap-1 text-white hover:bg-[#1c5dd8] px-4 py-2 rounded transition-colors">
              <User className="w-5 h-5" />
              <span className="hidden md:inline text-sm font-medium">Login</span>
            </button>

            <button className="flex items-center gap-1 text-white hover:bg-[#1c5dd8] px-4 py-2 rounded transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:inline text-sm font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="hidden lg:flex items-center gap-1 text-white hover:bg-[#1c5dd8] px-4 py-2 rounded transition-colors">
              <span className="text-sm font-medium">More</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full px-4 py-2 pr-12 rounded-sm focus:outline-none text-sm"
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2874f0] w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
