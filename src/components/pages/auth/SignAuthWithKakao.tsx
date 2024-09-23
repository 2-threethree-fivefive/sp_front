'use client';

import Image from 'next/image';
import { Button } from '../../ui/button';
import { signIn } from 'next-auth/react';

const SignAuthWithKakao = () => {
  const handleKakaoAuth = async (e: React.MouseEvent) => {
    await signIn('kakao', { redirect: true });
  };

  return (
    <Button
      className="mt-2"
      size="kakao"
      type="button"
      onClick={handleKakaoAuth}
    >
      <Image
        src="/assets/images/kakaos/kakao.png"
        alt="kakao-login button"
        fill
        style={{ objectFit: 'cover', borderRadius: '8px' }}
      />
    </Button>
  );
};

export default SignAuthWithKakao;
