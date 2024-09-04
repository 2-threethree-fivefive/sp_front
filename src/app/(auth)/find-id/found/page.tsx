import FindIdAuth from '@/components/pages/auth/find-id/FindIdAuth';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/ui/layout';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <Layout variant="findId">
      <FindIdAuth />
      <Layout variant="submitDiv">
        <Link href="/sign-in">
          <Button size={'submit'} type="submit">
            확인
          </Button>
        </Link>
      </Layout>
    </Layout>
  );
}
