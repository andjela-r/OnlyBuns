import {Post, RegisteredUser} from "@/app/types/Post";

export interface PostComment {
    id: string,
    content: string,
    registereduser: RegisteredUser,
    post: Post,
    timecreated: string,
}