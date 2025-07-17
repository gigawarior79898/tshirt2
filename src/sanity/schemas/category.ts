const category = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
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
      name: 'texture',
      type: 'image',
      title: 'Texture Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Category',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'texture'
    }
  }
};

export default category;