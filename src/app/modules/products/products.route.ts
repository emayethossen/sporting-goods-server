// import { Router } from "express";
// import { productController } from "./products.controller";

// const router = Router();

// router.post("/products", productController.createProduct);
// router.get("/products", productController.getAllProducts);
// router.get("/products/:id", productController.getProductById);
// router.patch("/products/:id", productController.updateProduct);
// router.delete("/products/:id", productController.deleteProduct);

// export const ProductRoutes = router;

import { Router } from "express";
import { productController } from "./products.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { adminMiddleware } from "../../middlewares/admin.middleware";

const router = Router();

// Admin routes
router.post("/products", authMiddleware, adminMiddleware, productController.createProduct);
router.patch("/products/:id", authMiddleware, adminMiddleware, productController.updateProduct);
router.delete("/products/:id", authMiddleware, adminMiddleware, productController.deleteProduct);

// Public routes
router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);

export const ProductRoutes = router;
