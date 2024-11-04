import { Post } from "../types/Post";

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

