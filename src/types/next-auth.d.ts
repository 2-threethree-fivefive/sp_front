import NextAuth, { DefaultSession } from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: string;
      name: string;
      uuid: string;
    } & DefaultSession['user'];
  }
}
