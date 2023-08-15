import React from 'react';
import Image from 'next/image';
import Chrome from '@/app/chrome.svg';

const Download = () => (
  <section className='bg-secondary border-accent flex h-1/2 w-full justify-center border-y-8 px-3 py-24 md:px-20  lg:px-52'>
    <div className=' flex flex-col items-center justify-center gap-16'>
      <div>
        <h2 className='text-gray text-5xl font-semibold'>
          Download Free Extension
        </h2>
      </div>
      <div className='bg-primary flex w-max items-center justify-center gap-4 rounded-xl px-14 py-4 transition-all duration-300 hover:translate-y-2 hover:cursor-pointer'>
        <Image src={Chrome} className='w-14' />
        <a className='text-2xl font-medium text-white'>Chrome</a>
      </div>
    </div>
  </section>
);

export default Download;
