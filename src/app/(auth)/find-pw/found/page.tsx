import ChangePwForm from '@/components/forms/ChangePwForm';
import ChangePwHeader from '@/components/pages/auth/find-pw/ChangePwHeader';
import { Layout } from '@/components/ui/layout';
import React from 'react';

export default function Page() {
  return (
    <Layout variant="findPw">
      <ChangePwHeader />
      <ChangePwForm />
    </Layout>
  );
}
