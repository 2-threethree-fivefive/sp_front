import SignUpAuthHeader from '@/components/pages/auth/SignAuthHeader';
import SignUpAuthWithKakao from '@/components/pages/auth/SignAuthWithKakao';
import { Layout } from '@/components/ui/layout';
import { AuthenticationMethodType } from '@/types/authType';

function Authentication({
  method,
  onNext,
}: {
  method: AuthenticationMethodType;
  onNext: () => void;
}) {
  return (
    <Layout variant="authentication">
      <SignUpAuthHeader />
      <SignUpAuthWithKakao />
    </Layout>
  );
}

export default Authentication;
