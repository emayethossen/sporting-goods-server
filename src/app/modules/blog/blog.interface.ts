import mongoose, { Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  author?: string;
  coverImage: string;
  isPremium?: boolean;
  upvotes: number;
  downvotes: number;
  comments: mongoose.Types.ObjectId[];
  tags?: string[];
  createdAt: Date;
}
