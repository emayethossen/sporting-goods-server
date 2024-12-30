import express from "express";
import {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
} from "./blog.controller";

const router = express.Router();

// Public routes
router.get("/blogs", getAllBlogs);
router.get("/blogs/:id", getBlogById);

// Admin routes
router.post("/blogs", createBlog);
router.put("/blogs/:id", updateBlog);
router.delete("/blogs/:id", deleteBlog);

export const BlogRoutes = router;
