'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import { toast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';

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

function SignUpIntroPage() {
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
    toast({
      title: '',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <main>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="items"
            render={({ field }) => (
              <FormItem>
                <div className="mb-4">
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
                  <FormLabel className="font-normal ml-2">전체 동의</FormLabel>
                </div>
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
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
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          <Button size={'submit'} type="submit" disabled={isSubmitDisabled}>
            다음
          </Button>
        </form>
      </Form>
    </main>
  );
}

export default SignUpIntroPage;
