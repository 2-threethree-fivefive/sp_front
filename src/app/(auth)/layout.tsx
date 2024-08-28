import React from 'react';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string };
}>) {
  return <>{children}</>;
}

export default layout;
