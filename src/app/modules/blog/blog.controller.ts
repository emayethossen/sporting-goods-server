import { Request, Response } from "express";
import Blog from "./blog.model";

// Create a new blog
export const createBlog = async (req: Request, res: Response) => {
    try {
        const { title, content, author, coverImage, isPremium, tags } = req.body;
        const newBlog = new Blog({
            title,
            content,
            author,
            coverImage,
            isPremium,
            tags,
            createdAt: new Date(),
        });

        const savedBlog = await newBlog.save();
        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            blog: savedBlog,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error creating blog", error });
    }
};

// Get all blogs
export const getAllBlogs = async (req: Request, res: Response) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({ success: true, blogs });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching blogs", error });
    }
};

// Get a single blog by ID
export const getBlogById = async (req: Request, res: Response) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.status(200).json({ success: true, blog });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching blog", error });
    }
};

// Update a blog by ID
export const updateBlog = async (req: Request, res: Response) => {
    try {
        const { title, content, coverImage, isPremium, tags } = req.body;
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, content, coverImage, isPremium, tags, updatedAt: new Date() },
            { new: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            blog: updatedBlog,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating blog", error });
    }
};

// Delete a blog by ID
export const deleteBlog = async (req: Request, res: Response) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.status(200).json({ success: true, message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting blog", error });
    }
};
