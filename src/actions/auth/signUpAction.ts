export async function createAuth(formData: FormData) {
  'use server';
  const payload = {
    id: formData.get('id'),
    name: formData.get('name'),
    nickname: formData.get('nickname'),
    email: formData.get('email'),
    password: formData.get('password'),
    terms: formData.get('1'),
  };
  console.log(payload);
  console.log(formData);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/v1/auth/sign-up`,
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
