'use client';
import { useEffect, useState } from 'react';
import { fetchCategories } from '@/utils/api';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

export default function CategoryOverlay() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="absolute top-0 left-0 p-8 z-10 text-white">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="text-yellow-400" size={32} />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Fashion Hub
          </h1>
        </div>
        
        <p className="text-gray-300 mb-6 max-w-md text-lg">
          Discover premium fashion collections in an immersive 3D experience
        </p>
      </motion.div>

      {isLoading ? (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-6 bg-white/10 rounded animate-pulse w-32" />
          ))}
        </div>
      ) : (
        <motion.ul 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((cat, index) => (
            <motion.li 
              key={cat._id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link 
                href={`/category/${cat.slug.current}`} 
                className="block text-xl font-medium hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 border-l-2 border-transparent hover:border-yellow-400 pl-4"
              >
                {cat.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}