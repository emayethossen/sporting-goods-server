import { Router } from "express";
import { productController } from "./products.controller";

const router = Router();

router.post("/products", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

export default router;
