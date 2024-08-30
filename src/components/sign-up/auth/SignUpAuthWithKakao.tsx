import Image from 'next/image';
import { Button } from '../../ui/button';

const SignUpAuthWithKakao = () => {
  return (
    // next-auth 구현 후 kakao login으로 구현하기
    <Button size="kakao">
      <Image
        src="/assets/images/kakaos/kakao.png"
        alt="kakao-login button"
        fill
        style={{ objectFit: 'cover', borderRadius: '8px' }}
      />
    </Button>
  );
};

export default SignUpAuthWithKakao;
