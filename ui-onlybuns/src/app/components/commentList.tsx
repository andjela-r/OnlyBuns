"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {PostComment} from "../types/PostComment"
import {fetchCommentsByPostId, fetchPublicPosts} from "@/app/lib/api";

interface CommentsListProps {
    postId: string;
}

export default function CommentsList({ postId }: CommentsListProps){
    const [comments, setComments] = useState<PostComment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
       const loadComments = async () => {
           try {
               let fetchedComments = await fetchCommentsByPostId(postId);
               setComments(fetchedComments);
           } catch (error) {
               console.error(error);
           } finally {
               setLoading(false);
           }
       }
       loadComments();
    }, [postId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>

    return ((comments.length != 0)? (
            <div className="my-2 rounded">
                {comments.map((comment) => (
                    <div key={comment.id} className="mb-3 bg-gray-50 my-1 rounded shadow-md p-3">
                        <div className="flex items-center">
                            <p>
                                <Link href={`/users/${comment.registereduser.name}${comment.registereduser.surname}`}
                                      className="font-bold hover:text-blue-800">
                                    {comment.registereduser.name} {comment.registereduser.surname}
                                </Link>
                            </p>
                            <p className="text-sm text-gray-500">&nbsp;•&nbsp;</p>
                            <p className="text-sm text-gray-500">{new Date(comment.timecreated).toLocaleString()}</p>
                        </div>
                        <p>{comment.content}</p>
                    </div>
                ))}
            </div>
    ) : (
        <div></div>
        )
    );
};