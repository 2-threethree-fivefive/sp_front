'use client';

import SignUpAuthHeader from '@/components/sign-up/auth/SignUpAuthHeader';
import SignUpAuthWithKakao from '@/components/sign-up/auth/SignUpAuthWithKakao';
import { Layout } from '@/components/ui/layout';

function SignUpAuth() {
  return (
    <Layout variant="signUp">
      <SignUpAuthHeader />
      <SignUpAuthWithKakao />
    </Layout>
  );
}

export default SignUpAuth;
