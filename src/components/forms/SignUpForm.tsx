'use client';

import { Button } from '../ui/button';
import { Layout } from '../ui/layout';
import SignUpField from './SignUpField';

function SignUpForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="w-full max-w-md rounded-lg mx-auto mt-10 text-black"
      onSubmit={handleSubmit}
    >
      <SignUpField />
      <Layout variant="submitDiv">
        <Button size={'submit'} type="submit">
          확인
        </Button>
      </Layout>
    </form>
  );
}

export default SignUpForm;
