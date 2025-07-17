import { NextResponse } from 'next/server';
import { client } from '@/utils/sanity';

export async function GET() {
  try {
    const categories = await client.fetch(`
      *[_type == "category"] | order(title asc) {
        _id, 
        title, 
        slug,
        description,
        featured,
        texture {
          asset->{url}
        }
      }
    `);
    
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    
    // Return mock data as fallback
    const mockCategories = [
      {
        _id: '1',
        title: 'Streetwear',
        slug: { current: 'streetwear' },
        description: 'Urban fashion and street style',
        featured: true
      },
      {
        _id: '2',
        title: 'Formal',
        slug: { current: 'formal' },
        description: 'Professional and elegant attire',
        featured: false
      },
      {
        _id: '3',
        title: 'Casual',
        slug: { current: 'casual' },
        description: 'Comfortable everyday wear',
        featured: true
      },
      {
        _id: '4',
        title: 'Accessories',
        slug: { current: 'accessories' },
        description: 'Complete your look with our accessories',
        featured: false
      }
    ];
    
    return NextResponse.json(mockCategories);
  }
}