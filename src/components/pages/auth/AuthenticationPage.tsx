'use client';

import SignUpAuthHeader from '@/components/auth/SignAuthHeader';
import SignUpAuthWithKakao from '@/components/auth/SignAuthWithKakao';
import { Layout } from '@/components/ui/layout';
import { AuthenticationMethodType } from '@/types/authType';

function Authentication({ method }: { method: AuthenticationMethodType }) {
  return (
    <Layout variant="authentication">
      <SignUpAuthHeader />
      <SignUpAuthWithKakao method={method} />
    </Layout>
  );
}

export default Authentication;
