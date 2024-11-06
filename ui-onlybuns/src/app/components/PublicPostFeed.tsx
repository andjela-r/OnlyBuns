"use client";
import React, { useEffect, useState } from 'react';
import { Post } from '../types/Post';
import { fetchPublicPosts } from '../lib/api';

const PublicPostFeed: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            try {
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

    if (loading) return <div>Loading...</div>;

    return (
        <div className="bg-white-20 container mx-auto p-4 flex flex-col items-center max-w-4xl">
            {posts.map((post) => (
                <div key={post.id} className="bg-white-20 p-4 rounded shadow-md mb-4 w-full max-w-2xl">
                    <h3 className="text-gray-800">
                        {post.registeredUser.name} {post.registeredUser.surname}
                    </h3>
                    <p className="text-gray-800 text-xl">{post.description}</p>
                    <img src={post.image || '/placeholder.png'} alt="Post" className="w-full h-auto mt-2 rounded"/>
                    <p className="text-gray-800 text-sm">{new Date(post.timecreated).toLocaleString()}</p>
                    <hr className="border-t border-gray-300 my-4"/>
                    <div className="flex justify-between items-center text-gray-600 text-sm">
                        <span>{post.likes} Likes</span>
                        <span>{post.comments} Comments</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PublicPostFeed;

