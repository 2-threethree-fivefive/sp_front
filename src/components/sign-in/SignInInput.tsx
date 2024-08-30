import React from 'react';
import { SignInInputType } from '@/types/sign-in/SignInInputType';

function SignInInput({ signInInput }: { signInInput: SignInInputType }) {
  return (
    <div className="relative w-full mb-4">
      <input
        type={signInInput.name}
        required
        autoComplete="off"
        value={signInInput.value}
        name={signInInput.name}
        onChange={(e) => signInInput.setValue(e.target.value)}
        onFocus={(e) => e.target.classList.add('border-green-500')}
        onBlur={(e) => {
          if (!signInInput.value) {
            e.target.classList.remove('border-green-500');
          }
        }}
        className={'w-full py-2 px-0 border-b-2 focus:outline-none'}
      />
      <label
        className={`absolute left-0 transition-all ${signInInput.value ? 'top-[-10px] text-green-500 text-sm' : 'top-2 text-gray-500'}`}
      >
        {signInInput.text}
      </label>
      {signInInput.value && (
        <button
          type="button"
          onClick={signInInput.clearValue}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
        >
          &times;
        </button>
      )}
    </div>
  );
}

export default SignInInput;
