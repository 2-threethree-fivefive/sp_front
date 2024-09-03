'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import SignInInput from '../sign-in/SignInInput';
import SignInHeader from '../sign-in/SignInHeader';
import SignInLinkList from '../sign-in/SignInLinkList';
import { Layout } from '../ui/layout';
import { signIn } from 'next-auth/react';

function SignInForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const clearId = () => setId('');
  const clearPassword = () => setPassword('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    signIn('credentials', {
      id: formData.get('id') as string,
      password: formData.get('password') as string,
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-6 rounded-lg mx-auto mt-10 text-black"
    >
      <SignInHeader />
      <SignInInput
        signInInput={{
          text: '아이디',
          value: id,
          name: 'id',
          setValue: setId,
          clearValue: clearId,
        }}
      />

      <SignInInput
        signInInput={{
          text: '비밀번호',
          value: password,
          name: 'password',
          setValue: setPassword,
          clearValue: clearPassword,
        }}
      />

      <SignInLinkList />

      <Layout variant="submitDiv">
        <Button size={'submit'} type="submit">
          로그인하기
        </Button>
      </Layout>
    </form>
  );
}

export default SignInForm;
