import SignUpIntroForm from '@/components/forms/SignUpIntroForm';
import SignUpIntroHeader from '@/components/pages/auth/sign-up/SignUpIntroHeader';
import { Layout } from '@/components/ui/layout';
import React from 'react';

export default function Page() {
  return (
    <Layout variant="authentication">
      <SignUpIntroHeader />
      <SignUpIntroForm />
    </Layout>
  );
}
