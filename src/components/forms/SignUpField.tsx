'use client';

import { SignUpRequestType } from '@/types/RequestTypes';
import { useState } from 'react';
import SignInInput from '../pages/auth/sign-in/SignInInput';
import { signInSchema } from '../schemas/signInSchema';

function SignUpField() {
  const [inputValues, setInputValues] = useState<SignUpRequestType>({
    id: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessages, setErrorMessages] = useState<
    Partial<SignUpRequestType>
  >({});

  const clearInput = (name: keyof SignUpRequestType) => {
    setInputValues((prev) => ({ ...prev, [name]: '' }));
  };

  const handleChange = (name: keyof SignUpRequestType) => (value: string) => {
    const updatedValues = {
      ...inputValues,
      [name]: value,
    };
    setInputValues(updatedValues);

    const res = signInSchema.safeParse(updatedValues);

    if (!res.success) {
      const fieldErrors: Partial<SignUpRequestType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof SignUpRequestType;
        fieldErrors[fieldName] = error.message;
      });
      setErrorMessages((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    } else {
      setErrorMessages((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <SignInInput
        signInInput={{
          text: '아이디 (8~20자리 이내)',
          value: inputValues.id,
          name: 'id',
          setValue: (value) => handleChange('id')(value),
          clearValue: () => clearInput('id'),
        }}
      />
      {errorMessages.id && (
        <p className="text-xs text-red-500">{errorMessages.id}</p>
      )}
      <SignInInput
        signInInput={{
          text: '닉네임 (4~12자리 이내)',
          value: inputValues.nickname,
          name: 'nickname',
          setValue: (value) => handleChange('nickname')(value),
          clearValue: () => clearInput('nickname'),
        }}
      />
      {errorMessages.nickname && (
        <p className="text-xs text-red-500">{errorMessages.nickname}</p>
      )}
      <SignInInput
        signInInput={{
          text: '이메일 주소',
          value: inputValues.email,
          name: 'email',
          setValue: (value) => handleChange('email')(value),
          clearValue: () => clearInput('email'),
        }}
      />
      {errorMessages.email && (
        <p className="text-xs text-red-500">{errorMessages.email}</p>
      )}
      <SignInInput
        signInInput={{
          text: '비밀번호 (10~20자리 이내)',
          value: inputValues.password,
          name: 'password',
          setValue: (value) => handleChange('password')(value),
          clearValue: () => clearInput('password'),
        }}
      />
      {errorMessages.password && (
        <p className="text-xs text-red-500">{errorMessages.password}</p>
      )}
      <SignInInput
        signInInput={{
          text: '비밀번호 확인',
          value: inputValues.confirmPassword,
          name: 'password',
          setValue: (value) => handleChange('confirmPassword')(value),
          clearValue: () => clearInput('confirmPassword'),
        }}
      />
      {errorMessages.confirmPassword && (
        <p className="text-xs text-red-500">{errorMessages.confirmPassword}</p>
      )}
    </>
  );
}

export default SignUpField;
