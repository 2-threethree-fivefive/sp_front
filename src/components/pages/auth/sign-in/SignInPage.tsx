'use client';

import SignInForm from '@/components/forms/SignInForm';
import { Layout } from '@/components/ui/layout';

function SignInPage() {
  return (
    <Layout variant="signIn">
      <SignInForm />
    </Layout>
  );
}

export default SignInPage;
