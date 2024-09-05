import { signUpIntroResType } from '@/types/ResponseTypes';

export const signUpIntroData: signUpIntroResType = {
  HttpStatus: 'ok',
  code: 200,
  message: 'success',
  data: [
    {
      id: 'ness1',
      label: '[필수] 이용약관 동의',
    },
    {
      id: 'ness2',
      label: '[필수] 개인정보 수집 및 이용동의',
    },
    {
      id: 'ness3',
      label: '[필수] 스타벅스 카드 이용약관',
    },
    {
      id: 'option',
      label: '[선택] 광고성 정보 수신 동의',
    },
    {
      id: 'option_1',
      label: 'E-mail',
    },
    {
      id: 'option_2',
      label: 'SMS',
    },
  ],
};
