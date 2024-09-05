'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Layout } from '../ui/layout';
import SignUpIntroField from './SignUpIntroField';
import { signUpIntroSchema } from '../schemas/signUpIntroSchema';
import { signUpIntroDataType } from '@/types/ResponseTypes';

interface SignUpIntroFormProps {
  items: signUpIntroDataType[];
}

const SignUpIntroForm: React.FC<SignUpIntroFormProps> = ({ items }) => {
  const form = useForm<z.infer<typeof signUpIntroSchema>>({
    resolver: zodResolver(signUpIntroSchema),
    defaultValues: {
      items: [],
    },
  });

  function onSubmit(data: z.infer<typeof signUpIntroSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <SignUpIntroField control={form.control} items={items} />
        <Layout variant="submitDiv">
          <Button size={'submit'} type="submit">
            확인
          </Button>
        </Layout>
      </form>
    </Form>
  );
};

export default SignUpIntroForm;
