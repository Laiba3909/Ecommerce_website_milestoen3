
export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
      
       
      {
        name: 'navigationLinks',
        title: 'Navigation Links',
        type: 'array',
        of: [
          {
            title: 'Link',
            type: 'object',
            fields: [
              {
                name: 'label',
                title: 'Link Label',
                type: 'string',
                description: 'Text that will appear for the link (e.g., "Home")',
              }
              ,
              {
                name: 'linkname',
                title: 'Link Name',
                type: 'string',
                description: 'Link that will appear navigation links (e.g., "home","about",e.t.c)',
              }
            ],
          },
        ],
        description: 'Add navigation links for the header, e.g., Home, About, Posts, etc.',
      },
    ],
  };
  