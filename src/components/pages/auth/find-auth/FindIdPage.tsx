'use client';

import FindIdAuth from '@/components/auth/FindIdAuth';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/ui/layout';
import Link from 'next/link';

function FindIdPage() {
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

export default FindIdPage;
