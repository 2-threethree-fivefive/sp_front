import React from 'react';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string };
}>) {
  return <main className="absolute w-full">{children}</main>
}

export default layout;
