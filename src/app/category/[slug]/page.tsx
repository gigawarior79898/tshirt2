import { client } from '@/utils/sanity';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProductGrid from '@/components/ProductGrid';

interface Category {
  _id: string;
  title: string;
  description: string;
  texture?: {
    asset: {
      url: string;
    };
  };
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category: Category = await client.fetch(
    `*[_type == "category" && slug.current == $slug][0]{
      _id,
      title,
      description,
      texture { asset->{url} }
    }`,
    { slug: params.slug }
  );

  if (!category) return notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {category.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {category.description}
            </p>
          </div>
          
          {category.texture?.asset?.url && (
            <div className="relative">
              <img
                src={category.texture.asset.url}
                alt={category.title}
                className="w-full rounded-2xl border border-white/10 shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          )}
        </div>

        <ProductGrid categoryId={category._id} />
      </div>
    </div>
  );
}