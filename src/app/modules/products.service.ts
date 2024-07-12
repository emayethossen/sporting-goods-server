import { TProduct } from "./products.interface";
import { Product } from "./products.model";

export const ProductServices = {
  createProduct: async (productData: TProduct) => {
    const product = new Product(productData);
    return await product.save();
  },

  getAllProducts: async () => {
    return await Product.find({});
  },

  getProductById: async (productId: string) => {
    return await Product.findById(productId);
  },

  updateProduct: async (productId: string, updateData: Partial<TProduct>) => {
    return await Product.findByIdAndUpdate(productId, updateData, {
      new: true,
    });
  },

  deleteProduct: async (productId: string) => {
    return await Product.findByIdAndDelete(productId);
  },
};
