'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { signUpIntroDataType } from '@/types/ResponseTypes';
import { CheckedState } from '@radix-ui/react-checkbox';
import { SignUpErrorMessageType } from '@/types/RequestTypes';
import { signUpIntroSchema } from '../schemas/signUpIntroSchema';
import { Button } from '../ui/button';
import { Layout } from '../ui/layout';

function SignUpIntroField({
  items,
  onNext,
}: {
  items: signUpIntroDataType[];
  onNext: () => void;
}) {
  const [terms, setTerms] = useState<string[]>([]);
  const [errorMessages, setErrorMessages] = useState<
    Partial<SignUpErrorMessageType>
  >({});

  const handleCheckedChange = (
    item: { id: string; label: string },
    checked: CheckedState
  ) => {
    let currentTerms = [...terms];

    if (item.id === 'option') {
      if (checked) {
        setTerms([...currentTerms, item.id, 'option_1', 'option_2']);
      } else {
        setTerms(
          currentTerms.filter(
            (value) =>
              value !== item.id && value !== 'option_1' && value !== 'option_2'
          )
        );
      }
    } else {
      if (checked) {
        currentTerms.push(item.id);
      } else {
        currentTerms = currentTerms.filter((value) => value !== item.id);
      }

      if (
        !checked &&
        !currentTerms.includes(
          item.id === 'option_1' ? 'option_2' : 'option_1'
        ) &&
        item.id !== 'option'
      ) {
        currentTerms = currentTerms.filter((value) => value !== 'option');
      }
      setTerms(currentTerms);
    }

    const res = signUpIntroSchema.safeParse({ terms: currentTerms });
    if (!res.success) {
      const fieldErrors: Partial<SignUpErrorMessageType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof SignUpErrorMessageType;
        fieldErrors[fieldName] = error.message;
      });
      setErrorMessages(fieldErrors);
    } else {
      setErrorMessages({});
    }
  };

  return (
    <>
      <div>
        <label>
          <Checkbox
            checked={
              items ? items.every((item) => terms.includes(item.id)) : false
            }
            onCheckedChange={(checked) => {
              const newTerms = checked ? items.map((item) => item.id) : [];
              setTerms(newTerms);
            }}
          />
          <span className="ml-2 font-bold text-md">약관 전체동의</span>
        </label>
      </div>
      {items.map((item) => (
        <div key={item.id} className="flex flex-row space-x-3 p-1 gap-1">
          <label>
            <Checkbox
              name={item.id}
              checked={terms.includes(item.id)}
              onCheckedChange={(checked) => handleCheckedChange(item, checked)}
              disabled={
                !terms.includes('option') &&
                (item.id === 'option_1' || item.id === 'option_2')
              }
            />
            <span className="font-bold text-md">{item.label}</span>
          </label>
        </div>
      ))}
      {errorMessages.terms && (
        <p className="text-xs text-red-500">{errorMessages.terms}</p>
      )}
      <Layout variant="submitDiv">
        <Button size={'submit'} type="button" onClick={onNext}>
          다음
        </Button>
      </Layout>
    </>
  );
}

export default SignUpIntroField;
