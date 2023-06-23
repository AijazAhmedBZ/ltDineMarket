import { defineType, defineField } from "sanity";

export const group = defineType({
  name: "group",
  title: "Group",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Group Name",
      type: "string",
    }),
  ],
});
