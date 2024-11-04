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
        <div className="container mx-auto p-4">
            {posts.map((post) => (
                <div key={post.id} className="bg-white p-4 rounded shadow mb-4">
                    <h3 className="text-gray-800 font-bold">
                        {post.registeredUser.name} {post.registeredUser.surname}
                    </h3>
                    <p className="text-gray-800">{post.description}</p>
                    <img src={post.image || '/placeholder.png'} alt="Post" className="w-full h-auto mt-2 rounded" />
                    <p className="text-gray-500 text-sm">{new Date(post.timeCreated).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default PublicPostFeed;

