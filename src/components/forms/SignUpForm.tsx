'use client';

import { useState } from 'react';
import SignInInput from '../sign-in/SignInInput';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

function SignUpForm() {
  const router = useRouter();

  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const clearId = () => setId('');
  const clearEmail = () => setEmail('');
  const clearPassword = () => setPassword('');
  const clearPassword2 = () => setPassword2('');

  const validateInputs = () => {
    const idRegex = /^[a-zA-Z0-9]{4,13}$/; // 영어, 숫자 4~13자리
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,20}$/; // 비밀번호 영어,숫자, 특수기호 최소1개이상 10~20자리

    if (!idRegex.test(id)) {
      return '아이디는 영어로 4~13자리여야 합니다.';
    }
    if (!emailRegex.test(email)) {
      return '유효한 이메일 주소를 입력하세요.';
    }
    if (!passwordRegex.test(password)) {
      return '비밀번호는 10~20자리로 영어, 숫자, 특수기호를 포함해야 합니다.';
    }
    if (password !== password2) {
      return '비밀번호와 비밀번호 확인이 일치해야 합니다.';
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
    } else {
      setError('');
      // todo 로직 추가 일단 홈으로 이동
      router.push('/sign-in');
    }
  };

  return (
    <form
      className="w-full max-w-md rounded-lg mx-auto mt-10 text-black"
      onSubmit={handleSubmit}
    >
      <SignInInput
        signInInput={{
          text: '아이디 (4~13자리 이내)',
          value: id,
          name: 'id',
          setValue: setId,
          clearValue: clearId,
        }}
      />
      <SignInInput
        signInInput={{
          text: '이메일 주소',
          value: email,
          name: 'email',
          setValue: setEmail,
          clearValue: clearEmail,
        }}
      />
      <SignInInput
        signInInput={{
          text: '비밀번호 (10~20자리 이내)',
          value: password,
          name: 'password',
          setValue: setPassword,
          clearValue: clearPassword,
        }}
      />
      <SignInInput
        signInInput={{
          text: '비밀번호 확인',
          value: password2,
          name: 'password',
          setValue: setPassword2,
          clearValue: clearPassword2,
        }}
      />
      {error && <p className="text-red-500">{error}</p>}
      <Button size={'submit'} type="submit">
        다음
      </Button>
    </form>
  );
}

export default SignUpForm;
