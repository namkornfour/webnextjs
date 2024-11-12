import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user : {
            amount? : number;
            username? : string;
        } & DefaultSession["user"];
    }
}