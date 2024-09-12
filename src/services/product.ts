import { Product } from "@/types/product";
import { products } from "@/database/data";

export const getAllProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
