const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: any) => Rule.required().positive()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Image Gallery',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'category' }],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'inStock',
      type: 'boolean',
      title: 'In Stock',
      initialValue: true
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Product',
      initialValue: false
    },
    {
      name: 'sizes',
      type: 'array',
      title: 'Available Sizes',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'XS', value: 'xs' },
          { title: 'S', value: 's' },
          { title: 'M', value: 'm' },
          { title: 'L', value: 'l' },
          { title: 'XL', value: 'xl' },
          { title: 'XXL', value: 'xxl' }
        ]
      }
    },
    {
      name: 'colors',
      type: 'array',
      title: 'Available Colors',
      of: [{ type: 'string' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'image'
    },
    prepare(selection: any) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: `$${subtitle}`,
        media
      };
    }
  }
};

export default product;