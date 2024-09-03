'use client';

import ChangePwHeader from '@/components/auth/ChangePwHeader';
import ChangePwForm from '@/components/forms/ChangePwForm';
import { Layout } from '@/components/ui/layout';

function FindPwPage() {
  return (
    <Layout variant="findPw">
      <ChangePwHeader />
      <ChangePwForm />
    </Layout>
  );
}

export default FindPwPage;
