import { z } from "zod";

export const productSchema = z.object({
  added_at_shop_site: z.string(),
  created_at: z.string(),
  id: z.number(),
  identificationMarks: z.string(),
  level: z.string(),
  linkInfo: z.string(),
  problemDescription: z.string(),
  productCategory: z.string(),
  productImage: z.string(),
  productName: z.string(),
  shopId: z.number(),
  updated_at: z.string(),
});

export type Product = z.infer<typeof productSchema>;
