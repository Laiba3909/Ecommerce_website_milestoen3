import { Rule } from '@sanity/types';
export default {
    name: "blogCard",
    title: "Blog Card",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        description: "The title of the blog post.",
      },
      {
        name: "description",
        title: "Description",
        type: "string",
        description: "Short description of the blog post.",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true, 
        },
        description: "Image representing the blog post.",
      },
      {
        name: "readMoreLink",
        title: "Read More Link",
        type: "url",
        description: "Link to the full blog post.",
      },
      {
        name: "timeToRead",
        title: "Time to Read",
        type: "string",
        description: "Estimated time to read the blog post, e.g., '5 min'.",
      },
      {
        name: "publishDate",
        title: "Publish Date",
        type: "date",
        options: {
          dateFormat: "DD MMM YYYY", 
        },
        description: "Date when the blog post was published.",
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number',
        description: 'Set the order of the product for manual sorting',
        validation: (Rule: Rule) => Rule.required().min(0),
      },
    ],
    orderings: [
      {
        title: 'Custom Order',
        name: 'customOrder',
        by: [{ field: 'order', direction: 'asc' }],
      },
  
    ],
  };
  