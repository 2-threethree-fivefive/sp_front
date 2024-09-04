import { z } from 'zod';

const idRegex = /^[a-zA-Z0-9]{4,13}$/;
const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,20}$/;

export const signInSchema = z
  .object({
    id: z
      .string()
      .min(8, '아이디는 8글자 이상이어야합니다.')
      .max(20, '아이디는 20글자 이하여야 합니다.')
      .regex(idRegex, '아이디는 영어와 숫자로 이루어집니다.'),
    nickname: z
      .string()
      .min(2, '닉네임은 2글자 이상이어야 합니다.')
      .max(10, '닉네임은 10글자 이하여야 합니다.')
      .regex(nicknameRegex, '닉네임은 한글, 영어, 숫자로 이루어져야 합니다.'),
    email: z.string().regex(emailRegex, '유효한 이메일 주소를 입력하세요.'),
    password: z
      .string()
      .min(10, '비밀번호는 10글자 이상이어야 합니다.')
      .max(20, '비밀번호는 20글자 이하여야 합니다.')
      .regex(
        passwordRegex,
        '영문, 숫자, 특수문자(~!@#%^&*)를 모두 조합해 주세요.'
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '비밀번호가 일치하지 않습니다.',
  });
