import { getSignUpInroData } from '@/actions/auth/statics/signUpIntroAction';
import SignUpIntroForm from '@/components/forms/SignUpIntroForm';
import SignUpIntroHeader from '@/components/pages/auth/sign-up/SignUpIntroHeader';
import { Layout } from '@/components/ui/layout';
import { signUpIntroDataType } from '@/types/ResponseTypes';
import React from 'react';

export default async function Page() {
  const items: signUpIntroDataType[] =
    (await getSignUpInroData()) as signUpIntroDataType[];
  return (
    <Layout variant="authentication">
      <SignUpIntroHeader />
      <SignUpIntroForm items={items} />
    </Layout>
  );
}
