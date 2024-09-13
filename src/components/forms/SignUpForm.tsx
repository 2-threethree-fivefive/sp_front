'use client';

import { signUpIntroDataType } from '@/types/ResponseTypes';
import SignUpField from './SignUpField';
import SignUpIntroField from './SignUpIntroField';
import { useState } from 'react';
import { SignUpRequestType } from '@/types/RequestTypes';
import Authentication from '../pages/auth/Authentication';
import { AuthenticationMethodType } from '@/types/authType';
import SignUpHeader from '../pages/auth/sign-up/SignUpHeader';

const steps = ['TermsAgree', 'SignUpInfo', 'Autentication', 'SignUpInfo'];

function SignUpForm({
  items,
  createAuth,
}: {
  items: signUpIntroDataType[];
  createAuth: (formData: FormData) => Promise<SignUpRequestType>;
}) {
  const [stepLevel, setStepLevel] = useState(0);

  const onNext = () => {
    setStepLevel((prev) => prev + 1);
  };

  return (
    <>
      <SignUpHeader step={steps[stepLevel]} />
      <form
        className="w-full max-w-md rounded-lg mx-auto mt-10 text-black"
        action={createAuth}
      >
        {steps[stepLevel] === 'TermsAgree' && (
          <SignUpIntroField items={items} onNext={onNext} />
        )}
        {steps[stepLevel] === 'Autentication' && (
          <Authentication
            method={AuthenticationMethodType.SignUp}
            onNext={onNext}
          />
        )}
        {steps[stepLevel] === 'SignUpInfo' && <SignUpField />}
      </form>
    </>
  );
}

export default SignUpForm;
