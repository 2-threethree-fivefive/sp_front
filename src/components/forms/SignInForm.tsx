'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import SignInInput from '../sign-in/SignInInput'
import SignInHeader from '../sign-in/SignInHeader'
import SignInLinkList from '../sign-in/SignInLinkList'

function SignInForm() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const clearId = () => setId('')
  const clearPassword = () => setPassword('')

  return (
    <div className="flex flex-col justify-between h-screen bg-white">
      <form className="w-full max-w-md p-6 rounded-lg mx-auto mt-10 text-black">
        <SignInHeader />

        <SignInInput
          signInInput={{
            text: '아이디',
            value: id,
            name: 'id',
            setValue: setId,
            clearValue: clearId,
          }}
        />

        <SignInInput
          signInInput={{
            text: '비밀번호',
            value: password,
            name: 'password',
            setValue: setPassword,
            clearValue: clearPassword,
          }}
        />

        <SignInLinkList />

        <Button size={'submit'} type="submit">
          로그인하기
        </Button>
      </form>
    </div>
  )
}

export default SignInForm
