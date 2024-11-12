import { Post } from "../types/Post";
import {PostComment} from "@/app/types/PostComment";

export const fetchPublicPosts = async (): Promise<Post[]> => {
    try {
        const response = await fetch("http://localhost:8080/api/posts/public");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        throw error;
    }
};

export const fetchCommentsByPostId = async (postId: string): Promise<PostComment[]> => {
    try {
        const response = await fetch(`http://localhost:8080/api/comments/post/${postId}`,{mode:'cors'});
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch comments:", error);
        throw error;
    }
};

