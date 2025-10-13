export interface Category {
  id: string;
  name: string;
  icon: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewsCount: number;
  categoryId: string;
  brand: string;
  stock: number;
  images: string[];
  specifications: Record<string, string>;
  offers: string[];
  isFeatured: boolean;
}
