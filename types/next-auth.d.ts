import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"


declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string
        refreshToekn?: string
        username?: string
        accessTokenExpires?: number
        error?: string,
    }
}
declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            accessToken?: string
            refreshToken?: string
            username?: string
        } & DefaultSession['user']
        error: string | undefined
    }
}
