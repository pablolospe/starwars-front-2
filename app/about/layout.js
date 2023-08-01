import About from '@/components/Home/Home';
import React from 'react';

function AboutLayout({ children }) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-left p-12">
        {children}
      </main>
    </>
  );
}

export default AboutLayout;
