import { group } from "console";
import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "product",
      title: "Product Name",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Product Category",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Product Price",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
    }),
    defineField({
      name: "group",
      title: "Product Group",
      type: "reference",
      to: [
        {
          type: "group",
        },
      ],
    }),
  ],
});
