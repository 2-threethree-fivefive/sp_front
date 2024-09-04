'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Layout } from '../ui/layout';

const items = [
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
    id: 'ness4',
    label: '[선택] 광고성 정보 수신 동의',
  },
  {
    id: 'option1',
    label: 'E-mail',
  },
  {
    id: 'option2',
    label: 'SMS',
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: '필수 선택요소가 모든 선택되지 않았습니다.',
  }),
});

export default function SignUpIntroForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    const { items } = form.getValues();
    const requiredItems = ['ness1', 'ness2', 'ness3'];
    const allRequiredChecked = requiredItems.every((id) => items.includes(id));
    setIsSubmitDisabled(!allRequiredChecked);
  }, [form.watch('items')]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push('/sign-up/auth');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4 pb-4 border-b-2">
                <FormControl>
                  <Checkbox
                    checked={items.every((item) =>
                      field.value?.includes(item.id)
                    )}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        field.onChange(items.map((item) => item.id));
                      } else {
                        field.onChange([]);
                      }
                    }}
                  />
                </FormControl>
                <FormLabel className="ml-2 font-bold text-md">
                  약관 전체동의
                </FormLabel>
              </div>
              <div className="pb-10 border-b-2">
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => (
                      <FormItem
                        className={`flex flex-row space-x-3 -space-y-1 p-1 gap-1 ${item.id.startsWith('option') ? 'ml-4' : ''}`}
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              let newValue;

                              if (item.id === 'ness4') {
                                newValue = checked
                                  ? [
                                      ...field.value,
                                      item.id,
                                      'option1',
                                      'option2',
                                    ]
                                  : field.value?.filter(
                                      (value) =>
                                        value !== item.id &&
                                        value !== 'option1' &&
                                        value !== 'option2'
                                    );
                              } else if (
                                item.id === 'option1' ||
                                item.id === 'option2'
                              ) {
                                newValue = checked
                                  ? [...field.value, item.id]
                                  : field.value?.filter(
                                      (value) => value !== item.id
                                    );

                                if (
                                  !checked &&
                                  !field.value?.includes(
                                    item.id === 'option1'
                                      ? 'option2'
                                      : 'option1'
                                  )
                                ) {
                                  newValue = newValue.filter(
                                    (value) => value !== 'ness4'
                                  );
                                } else if (checked) {
                                  if (!field.value?.includes('ness4')) {
                                    newValue.push('ness4');
                                  }
                                }
                              } else {
                                newValue = checked
                                  ? [...field.value, item.id]
                                  : field.value?.filter(
                                      (value) => value !== item.id
                                    );
                              }

                              field.onChange(newValue);
                            }}
                            disabled={
                              !field.value?.includes('ness4') &&
                              (item.id === 'option1' || item.id === 'option2')
                            }
                          />
                        </FormControl>
                        <FormLabel className="font-bold text-md">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Layout variant="submitDiv">
          <Button size={'submit'} type="submit">
            확인
          </Button>
        </Layout>
      </form>
    </Form>
  );
}
