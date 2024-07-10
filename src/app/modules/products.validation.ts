import { z } from "zod";

const productValidationSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  category: z.string({ required_error: "Category is required" }),
  stockQuantity: z.number({ required_error: "Stock quantity is required" }),
  brand: z.string({ required_error: "Brand is required" }),
  rating: z.number({ required_error: "Rating is required" }).min(0).max(5),
  description: z.string({ required_error: "Description is required" }),
  price: z.number({ required_error: "Price is required" }),
  image: z.string({ required_error: "Image is required" }),
});

export const productValidation = {
  productValidationSchema,
};
