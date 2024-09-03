import SignUpForm from '@/components/forms/SignUpForm';
import SignUpHeader from '@/components/sign-up/SignUpHeader';
import { Layout } from '@/components/ui/layout';

function SignUpPage() {
  return (
    <Layout variant="authentication">
      <SignUpHeader />
      <SignUpForm />
    </Layout>
  );
}

export default SignUpPage;
