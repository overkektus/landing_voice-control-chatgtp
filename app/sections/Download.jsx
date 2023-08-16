import React from 'react';
import Image from 'next/image';
import Chrome from '@/app/assets/chrome.svg';

const Download = () => (
  <section className='flex h-1/2 w-full justify-center border-y-8 border-accent bg-secondary px-3 py-24 md:px-20  lg:px-52'>
    <div className=' flex flex-col items-center justify-center gap-16'>
      <div>
        <h2 className='text-5xl font-semibold text-gray'>
          Download Free Extension
        </h2>
      </div>
      <div className='flex w-max items-center justify-center gap-4 rounded-xl bg-primary px-14 py-4 transition-all duration-300 hover:translate-y-2 hover:cursor-pointer'>
        <Image src={Chrome} className='w-14' />
        <a className='text-2xl font-medium text-white'>Chrome</a>
      </div>
    </div>
  </section>
);

export default Download;
