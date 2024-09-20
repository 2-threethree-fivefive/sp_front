import { createAuth } from '@/actions/auth/signUpAction';
import { getSignUpInroData } from '@/actions/auth/statics/signUpIntroAction';
import SignUpForm from '@/components/forms/SignUpForm';
import { Layout } from '@/components/ui/layout';
import { signUpIntroDataType } from '@/types/ResponseTypes';
import React from 'react';

export default async function Page() {
  const items: signUpIntroDataType[] =
    (await getSignUpInroData()) as signUpIntroDataType[];

  const handleSignUp = async (formData: FormData) => {
    'use server';
    const res = await createAuth(formData);
    console.log(res);
  };

  return (
    <Layout variant="authentication">
      <SignUpForm
        items={items}
        createAuth={createAuth}
        handleSignUp={handleSignUp}
      />
    </Layout>
  );
}
