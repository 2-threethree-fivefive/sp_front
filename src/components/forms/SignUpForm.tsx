'use client';

import { signUpIntroDataType } from '@/types/ResponseTypes';
import SignUpField from './SignUpField';
import SignUpIntroField from './SignUpIntroField';
import { useState } from 'react';
import { SignUpRequestType } from '@/types/RequestTypes';
import SignUpHeader from '../pages/auth/sign-up/SignUpHeader';
import SignUpEmailField from './SignUpEmailField';

const steps = ['TermsAgree', 'InputId', 'SignUpInfo'];

function SignUpForm({
  items,
  createAuth,
  handleSignUp,
}: {
  items: signUpIntroDataType[];
  createAuth: (formData: FormData) => Promise<SignUpRequestType>;
  handleSignUp: (formData: FormData) => void;
}) {
  const [stepLevel, setStepLevel] = useState(0);
  const [formData, setFormData] = useState<FormData>(new FormData());

  const onNext = () => {
    setStepLevel((prev) => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignUp(formData);
  };

  return (
    <>
      <SignUpHeader steps={steps} stepLevel={stepLevel} />
      <form
        className="w-full max-w-md rounded-lg mx-auto mt-10 text-black"
        onSubmit={handleSubmit}
      >
        {steps[stepLevel] === 'TermsAgree' && (
          <SignUpIntroField items={items} onNext={onNext} />
        )}
        {steps[stepLevel] === 'InputId' && (
          <SignUpEmailField onNext={onNext} formData={formData} />
        )}
        {steps[stepLevel] === 'SignUpInfo' && (
          <SignUpField formData={formData} />
        )}
      </form>
    </>
  );
}

export default SignUpForm;
