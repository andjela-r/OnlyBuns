"use client";
import React, {useEffect, useState} from 'react';
import {Post} from '../types/Post';
import { fetchPublicPosts } from '../lib/api';
import Link from "next/link";
import Image from "next/image";
import CommentsList from "@/app/components/commentList";

const PublicPostFeed: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                // Fetch posts
                const fetchedPosts = await fetchPublicPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        loadPosts();
    }, []);

    const handleLike = (postId: string) => {
        console.log(`Liked post with id: ${postId}`);
    };

    // Handler for the comment button
    const handleComment = (postId: string) => {
        console.log(`Commenting on post with id: ${postId}`);
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="bg-white-20 container mx-auto p-4 flex flex-col items-center max-w-4xl">
            {posts.map((post) => (
                <div key={post.id} className="bg-white-20 p-4 rounded shadow-md mb-4 w-full max-w-2xl">

                    {post.registereduser ? (
                        <h3 className="text-gray-800 font-bold">
                            <Link href={`/users/${post.registereduser.name}${post.registereduser.surname}`} className="hover:text-blue-800">
                                {post.registereduser.name} {post.registereduser.surname}
                            </Link>
                        </h3>
                    ) : (
                        <h3 className="text-gray-800">Anonymous User</h3>
                    )}
                    <p className="text-gray-800 text-xl">{post.description}</p>
                    <img src={post.image || '/placeholder.png'} alt="Post" className="w-full h-auto mt-2 rounded"/>
                    <p className="text-gray-800 text-sm">{new Date(post.timecreated).toLocaleString()}</p>
                    <hr className="border-t border-gray-300 my-4"/>
                    <div className="flex justify-between items-center text-gray-600 text-sm">
                        <span>{post.likes} Likes</span>
                        <span>{post.comments} Comments</span>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={() => handleLike(post.id)}
                            className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-600 flex items-center"
                        >
                            <Image src="/images/like.png" alt="" width={25} height={10} className="mr-5 mb-2"></Image>
                            Like
                        </button>
                        <button
                            onClick={() => handleComment(post.id)}
                            className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-600 flex items-center"
                        >
                            <Image src="/images/comments.png" alt="" width={25} height={25}
                                   className="mr-2 my-1"></Image>
                            Comment
                        </button>
                    </div>
                    <CommentsList postId={post.id}/>
                </div>
            ))}
        </div>
    );
};

export default PublicPostFeed;

