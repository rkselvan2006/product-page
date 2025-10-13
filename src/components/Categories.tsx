import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Category } from '../types';
import { useRef } from 'react';

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white py-6 shadow-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>

        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => {
              const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

              return (
                <div
                  key={category.id}
                  className="flex-shrink-0 w-32 md:w-40 cursor-pointer group/item"
                >
                  <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#2874f0]">
                    <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-white">
                      <img
                        src={category.imageUrl}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      {IconComponent && <IconComponent className="w-5 h-5 text-[#2874f0]" />}
                      <p className="text-sm font-semibold text-gray-800 text-center">{category.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
