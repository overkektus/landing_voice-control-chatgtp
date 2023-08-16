import React from 'react';
import Image from 'next/image';
import Chrome from '@/app/assets/chrome.svg';

const Download = () => (
  <section className='flex h-1/4 w-full justify-center border-y-8 border-accent bg-secondary px-3 py-12'>
    <div className=' flex flex-col items-center justify-center gap-16'>
      <div>
        <h2 className='text-4xl font-semibold text-gray'>
          Download Free Extension
        </h2>
      </div>
      <div className='flex w-max items-center justify-center gap-4 rounded-xl bg-primary px-20 py-4 transition-all duration-300 hover:cursor-pointer hover:bg-accent active:translate-y-2'>
        <Image src={Chrome} className='w-12' />
        <a className='text-2xl font-medium text-white'>Chrome</a>
      </div>
    </div>
  </section>
);

export default Download;
