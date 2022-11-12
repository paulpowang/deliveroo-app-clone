export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "short_description",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price of the dish",
      type: "number",
    },
    {
      name: "image",
      title: "Image of the Restaurant",
      type: "image",
    },
  ],
};
