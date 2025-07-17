'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';

interface Product {
  _id: string;
  name: string;
  price: number;
  image?: {
    asset: {
      url: string;
    };
  };
  description: string;
}

export default function ProductGrid({ categoryId }: { categoryId: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock products for demonstration
    const mockProducts: Product[] = [
      {
        _id: '1',
        name: 'Premium Cotton T-Shirt',
        price: 49.99,
        description: 'Soft, comfortable cotton t-shirt perfect for everyday wear.',
        image: {
          asset: {
            url: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500'
          }
        }
      },
      {
        _id: '2',
        name: 'Designer Jeans',
        price: 129.99,
        description: 'High-quality denim with a modern fit and premium finish.',
        image: {
          asset: {
            url: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500'
          }
        }
      },
      {
        _id: '3',
        name: 'Luxury Sneakers',
        price: 199.99,
        description: 'Comfortable and stylish sneakers for the modern lifestyle.',
        image: {
          asset: {
            url: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500'
          }
        }
      },
      {
        _id: '4',
        name: 'Classic Blazer',
        price: 299.99,
        description: 'Elegant blazer perfect for professional and casual occasions.',
        image: {
          asset: {
            url: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500'
          }
        }
      }
    ];

    setTimeout(() => {
      setProducts(mockProducts);
      setIsLoading(false);
    }, 1000);
  }, [categoryId]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-4 animate-pulse">
            <div className="aspect-square bg-white/10 rounded-lg mb-4" />
            <div className="h-4 bg-white/10 rounded mb-2" />
            <div className="h-3 bg-white/10 rounded w-2/3" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-white">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group"
          >
            {product.image?.asset?.url && (
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={product.image.asset.url}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            
            <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
            
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-white">${product.price}</span>
              <div className="flex gap-2">
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Heart size={16} className="text-white" />
                </button>
                <button className="p-2 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors">
                  <ShoppingBag size={16} className="text-black" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}