'use client';

import Image from 'next/image';
import { Button } from '../../ui/button';
import { AuthenticationMethodType } from '@/types/authType';
import { signIn } from 'next-auth/react';

const SignAuthWithKakao = ({
  method,
  onNext,
}: {
  method: AuthenticationMethodType;
  onNext: () => void;
}) => {
  const handleKakaoAuth = async (e: React.MouseEvent) => {
    e.preventDefault();
    switch (method) {
      case 'sign-up':
        await signIn('kakao', { redirect: false });
        onNext();
        break;

      case 'find-id':
        // 인증 후 아이디 보여주는 페이지로 이동
        console.log('아이디 찾기 처리');
        break;

      case 'find-pw':
        // 인증 후 비밀번호 재설정 페이지로 이동
        console.log('비밀번호 찾기 처리');
        break;

      default:
        console.error('지원하지 않는 메서드입니다.');
        break;
    }
  };

  return (
    <Button size="kakao" onClick={handleKakaoAuth}>
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
