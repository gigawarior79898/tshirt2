const globalSettings = {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      type: 'string',
      title: 'Site Name',
      initialValue: 'Fashion Hub'
    },
    {
      name: 'heroText',
      type: 'string',
      title: 'Hero Text',
      initialValue: 'Discover premium fashion collections'
    },
    {
      name: 'sphereMode',
      type: 'boolean',
      title: 'Use Sphere Mode',
      initialValue: true
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Site Logo',
      options: {
        hotspot: true
      }
    },
    {
      name: 'socialMedia',
      type: 'object',
      title: 'Social Media Links',
      fields: [
        {
          name: 'instagram',
          type: 'url',
          title: 'Instagram'
        },
        {
          name: 'twitter',
          type: 'url',
          title: 'Twitter'
        },
        {
          name: 'facebook',
          type: 'url',
          title: 'Facebook'
        }
      ]
    }
  ]
};

export default globalSettings;