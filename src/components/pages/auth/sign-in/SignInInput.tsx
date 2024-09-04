import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SignInInputType } from '@/types/authType';
import React from 'react';

function SignInInput({ signInInput }: { signInInput: SignInInputType }) {
  return (
    <div className="relative w-full mb-4">
      <Input
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
      />
      <label
        className={`absolute left-0 transition-all ${signInInput.value ? 'top-[-6px] text-green-500 text-sm' : 'top-4 text-gray-500'}`}
      >
        {signInInput.text}
      </label>
      {signInInput.value && (
        <Button
          variant="clear"
          size="clear"
          type="button"
          onClick={signInInput.clearValue}
        >
          &times;
        </Button>
      )}
    </div>
  );
}

export default SignInInput;
