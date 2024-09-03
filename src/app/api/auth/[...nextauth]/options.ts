import { commonResType } from '@/types/ResponseTypes';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        id: { label: 'id', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.id || !credentials?.password) {
          return null;
        }

        // console.log('credentials', credentials);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/member/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: credentials.id,
            password: credentials.password,
          }),
        });

        if (res.ok) {
          const user: commonResType = (await res.json()) as commonResType;
          console.log('user', user);
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('signIn', user, account, profile);
      return true;
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: '/sign-in',
    error: '/error',
  },
};
