import React from 'react';
import Image from 'next/image';
import ChatBotSVG from '@/app/chat-bot-animate.svg';

const Main = () => (
  <section className='flex h-screen w-full flex-1 justify-center px-3 py-24 md:px-20 lg:px-52'>
    <div className='flex flex-row items-center justify-between'>
      <div className='w-1/2'>
        <p className='text-gray text-5xl font-semibold leading-tight'>
          Elevate Your Interaction with ChatGPT throught voice input and
          listen-aloud abillities
        </p>
      </div>
      <div>
        <Image src={ChatBotSVG} />
      </div>
    </div>
  </section>
);

export default Main;
