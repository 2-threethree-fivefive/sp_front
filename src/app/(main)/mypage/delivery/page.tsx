import MyPageHeader from '@/components/layouts/MyPageHeader';
import DeliveryContent from '@/components/pages/main/mypage/delivery/DeliveryContent';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/ui/layout';
import { Plus } from 'lucide-react';
import Link from 'next/link';

function Page() {
  return (
    <>
      <MyPageHeader text="배송지 관리" />
      <DeliveryContent />
      <Layout className="z-20" variant="submitDiv">
        <Link href="delivery/add">
          <Button
            size="submit"
            className="flex justify-center items-center gap-x-2"
          >
            <Plus className="inline-block" />
            <span>새 배송지 추가</span>
          </Button>
        </Link>
      </Layout>
    </>
  );
}

export default Page;
