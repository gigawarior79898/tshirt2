import { NextResponse } from 'next/server';
import { client } from '@/utils/sanity';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get('category');
  
  try {
    let query = `*[_type == "product"`;
    
    if (categoryId) {
      query += ` && category._ref == "${categoryId}"`;
    }
    
    query += `] | order(name asc) {
      _id,
      name,
      slug,
      description,
      price,
      inStock,
      featured,
      sizes,
      colors,
      image {
        asset->{url}
      },
      gallery[] {
        asset->{url}
      },
      category->{
        _id,
        title,
        slug
      }
    }`;
    
    const products = await client.fetch(query);
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json([], { status: 500 });
  }
}