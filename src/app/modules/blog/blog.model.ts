

import mongoose, { Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const BlogSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: false },
    coverImage: { type: String, required: true },
    isPremium: { type: Boolean, default: false },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    tags: { type: [String], default: [] },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IBlog>("Blog", BlogSchema);
