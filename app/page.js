import React from 'react';
import Header from '@/app/sections/Header';
import Main from '@/app/sections/Main';
import Download from '@/app/sections/Download';
import Features from '@/app/sections/Features';
import Footer from '@/app/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Download />
      <Features />
      <Footer />
    </>
  );
}
