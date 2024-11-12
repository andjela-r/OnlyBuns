export interface RegisteredUser {
    id: string;
    username: string;
    name: string;
    surname: string;
    email: string;
    address: string;
    followers: number;
    posts: number;
    following: number;
    isactivated: boolean;
    isadmin: boolean;
    datecreated: string;
    lastlogin: string | null;
}

export interface Post {
    id: string;
    registereduser: RegisteredUser;  // User information
    description: string;
    image: string | null;
    compressedImage: string | null;
    location: string | null;
    timecreated: string;
    likes: number;
    comments: number;
    isDeleted: boolean;
    isForAd: boolean;
    forAd: boolean;
    deleted: boolean;
}
