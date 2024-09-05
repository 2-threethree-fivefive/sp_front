import { signUpIntroData } from '@/datas/signUpIntroDatas';
import { signUpIntroResType } from '@/types/ResponseTypes';

export async function getSignUpInroData() {
  'use server';
  const res: signUpIntroResType = signUpIntroData;
  if (res.HttpStatus === 'ok') {
    return res.data;
  }

  return null;
}
