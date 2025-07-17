export async function fetchCategories() {
  try {
    const res = await fetch('/api/categories', {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Return mock data as fallback
    return [
      {
        _id: '1',
        title: 'Streetwear',
        slug: { current: 'streetwear' }
      },
      {
        _id: '2',
        title: 'Formal',
        slug: { current: 'formal' }
      },
      {
        _id: '3',
        title: 'Casual',
        slug: { current: 'casual' }
      },
      {
        _id: '4',
        title: 'Accessories',
        slug: { current: 'accessories' }
      }
    ];
  }
}

export async function fetchProducts(categoryId?: string) {
  try {
    const url = categoryId ? `/api/products?category=${categoryId}` : '/api/products';
    const res = await fetch(url, {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}