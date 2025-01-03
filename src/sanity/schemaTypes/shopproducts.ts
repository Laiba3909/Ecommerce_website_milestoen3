export default {
    name: "product2",
    title: "Shop Products",
    type: "document",
    fields: [
      {
        name: "id",
        title: "Product ID",
        type: "number",
        description: "Unique identifier for the product",
      },
      {
        name: "name",
        title: "Product Name",
        type: "string",
        description: "Name of the product",
      },
      {
        name: "image",
        title: "Product Image",
        type: "image",
        options: {
          hotspot: true,
        },
        description: "Upload the product image",
      },
      {
        name: "price",
        title: "Price",
        type: "number",
        description: "Price of the product in your currency",
      },
      {
        name: "order",
        title: "Order",
        type: "number",
        description: "Order of the product for display purposes",
      },
    ],
    orderings: [
      {
        title: "Custom Order",
        name: "customOrder",
        by: [{ field: "order", direction: "asc" }],
      },
    ],
  };
  