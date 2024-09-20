'use server';

export async function createAuth(formData: FormData) {
  'use server';
  console.log('FormData before submission:', Array.from(formData.entries()));
  const payload = {
    userId: formData.get('id'),
    name: formData.get('name'),
    nickname: formData.get('nickname'),
    email: formData.get('email'),
    password: formData.get('password'),
  };
  console.log(payload);
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/sign-up`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(res);

  if (res.ok) {
    return await res.json();
  }
  return null;
}

export async function verifyEmail(email: string) {
  'use server';
  const payload = {
    email: email,
  };
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/auth/email-duplicate`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  console.log(res);

  if (res.ok) {
    return await res.json();
  }
  return null;
}
