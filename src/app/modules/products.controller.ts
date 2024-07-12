import { Request, Response } from "express";
import { productValidation } from "./products.validation";
import { ProductServices } from "./products.service";
import { TProduct } from "./products.interface";

export const productController = {
  createProduct: async (req: Request, res: Response) => {
    try {
      const productData = productValidation.productValidationSchema.parse(
        req.body,
      );
      const result = await ProductServices.createProduct(productData);

      res.status(201).json({
        success: true,
        message: "Product added successfully",
        data: result,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Error creating product:", err);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        errorMessages: [{ path: "", message: err.message }],
      });
    }
  },

  getAllProducts: async (req: Request, res: Response) => {
    try {
      const result = await ProductServices.getAllProducts();
      res.status(200).json({
        success: true,
        message: "Products retrieved successfully",
        data: result,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Error getting all products:", err);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        errorMessages: [{ path: "", message: err.message }],
      });
    }
  },

  getProductById: async (req: Request, res: Response) => {
    try {
      const productId = req.params.id;
      const result = await ProductServices.getProductById(productId);

      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Product retrieved successfully",
        data: result,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Error getting product by id:", err);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        errorMessages: [{ path: "", message: err.message }],
      });
    }
  },

  updateProduct: async (req: Request, res: Response) => {
    try {
      const productId = req.params.id;
      const updateData = req.body as Partial<TProduct>;

      const result = await ProductServices.updateProduct(productId, updateData);

      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: result,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Error updating product:", err);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        errorMessages: [{ path: "", message: err.message }],
      });
    }
  },

  deleteProduct: async (req: Request, res: Response) => {
    try {
      const productId = req.params.id;

      const result = await ProductServices.deleteProduct(productId);

      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        data: result,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Error deleting product:", err);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        errorMessages: [{ path: "", message: err.message }],
      });
    }
  },
};
