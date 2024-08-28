'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function SignInForm() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const clearId = () => setId('')
  const clearPassword = () => setPassword('')

  return (
    <div className="flex flex-col justify-between h-screen bg-white">
      <form className="w-full max-w-md p-6 rounded-lg mx-auto mt-10 text-black">
        <div className="font-bold flex flex-col items-start mb-6">
          <h1 className="text-3xl font-bold mb-14">로그인</h1>
          <Image
            alt="starbucks-logo"
            src="/assets/images/logos/Starbucks-logo.svg"
            width={100}
            height={100}
            className="mb-4"
          />
          <h2 className="text-2xl mt-2 mb-3">
            안녕하세요.
            <br /> 스타벅스입니다.
          </h2>
          <p className="text-gray-500 mb-12">
            회원 서비스 이용을 위해 로그인 해주세요.
          </p>
        </div>

        <div className="relative w-full mb-4 ">
          <input
            type="text"
            required
            placeholder=""
            autoComplete="off"
            value={id}
            name="id"
            onChange={(e) => setId(e.target.value)}
            onFocus={(e) => e.target.classList.add('border-green-500')}
            onBlur={(e) => {
              if (!id) {
                e.target.classList.remove('border-green-500')
              }
            }}
            className={`w-full py-2 px-0 border-b-2 focus:outline-none`}
          />
          <label
            className={`absolute left-0 transition-all ${id ? 'top-[-10px] text-green-500 text-sm' : 'top-2 text-gray-500'}`}
          >
            아이디
          </label>
          {id && (
            <button
              type="button"
              onClick={clearId}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
            >
              &times;
            </button>
          )}
        </div>

        <div className="relative w-full mb-4">
          <input
            type="password"
            placeholder=""
            required
            autoComplete="off"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={(e) => e.target.classList.add('border-green-500')}
            onBlur={(e) => {
              if (!password) {
                e.target.classList.remove('border-green-500')
              }
            }}
            className={`w-full py-2 px-0 border-b-2 focus:outline-none`}
          />
          <label
            className={`absolute left-0 transition-all ${password ? 'top-[-10px] text-green-500 text-sm' : 'top-2 text-gray-500'}`}
          >
            비밀번호
          </label>
          {password && (
            <button
              type="button"
              onClick={clearPassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
            >
              &times;
            </button>
          )}
        </div>

        <div className="flex flex-row justify-center items-center text-sm mt-4 mb-6">
          <Link className="p-3 text-slate-800 hover:underline" href="/find-id">
            아이디 찾기
          </Link>
          <span className="mx-2 text-gray-500">|</span>
          <Link className="p-3 text-slate-800 hover:underline" href="/find-pw">
            비밀번호 찾기
          </Link>
          <span className="mx-2 text-gray-500">|</span>
          <Link className="p-3 text-slate-800 hover:underline" href="/sign-up">
            회원가입
          </Link>
        </div>
        <button
          className="font-bold w-full max-w-md mt-6 py-3 px-4 bg-green-500 text-white rounded-3xl border border-gray-300"
          type="submit"
        >
          로그인하기
        </button>
      </form>
    </div>
  )
}

export default SignInForm
