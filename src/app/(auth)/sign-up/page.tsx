import SignUpForm from '@/components/forms/SignUpForm';
import SignUpHeader from '@/components/pages/auth/sign-up/SignUpHeader';
import { Layout } from '@/components/ui/layout';
import React from 'react';

export default function Page() {
  return (
    <Layout variant="authentication">
      <SignUpHeader />
      <SignUpForm />
    </Layout>
  );
}
