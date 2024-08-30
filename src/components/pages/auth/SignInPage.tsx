'use client';

import SignInForm from '@/components/forms/SignInForm';
import { Layout } from '@/components/ui/layout';
import { useState } from 'react';

function SignInPage() {
  return (
    <Layout variant="signIn">
      <SignInForm></SignInForm>
    </Layout>
  );
}

export default SignInPage;
