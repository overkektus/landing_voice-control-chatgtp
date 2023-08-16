import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Logo from '@/app/assets/logo.png';

const Header = () => (
  <header className='fixed z-10 w-full border-b-2 border-accent bg-white px-10 py-6 shadow-md'>
    <div className='flex flex-row justify-between'>
      <div className='flex flex-row items-center gap-6'>
        <Image src={Logo} className='w-10' />
        <h1 className='text-xl font-bold text-gray'>
          Voice Control For ChatGPT
        </h1>
      </div>
      <FontAwesomeIcon icon={faGithub} className='w-8' />
    </div>
  </header>
);

export default Header;
