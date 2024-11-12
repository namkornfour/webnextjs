import { DateTime } from "next-auth/providers/kakao";

export interface PostProps {
    id: string;
    title: string;
    content: string;
    published: boolean;
    createdAt: DateTime;
}