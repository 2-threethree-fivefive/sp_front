import Authentication from '@/components/pages/auth/AuthenticationPage';
import { AuthenticationMethodType } from '@/types/authType';
import React from 'react';

export default function Page() {
  return (
    <>
      <Authentication method={AuthenticationMethodType.FindPw} />
    </>
  );
}
