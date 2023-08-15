'use client';

import React from 'react';

const Footer = () => (
  <footer className='flex justify-between border-t-8 border-accent bg-secondary px-10 py-8'>
    <div>
      <p>© {new Date().getFullYear()} All right reserved</p>
      <a href='http://www.freepik.com'>Designed by vectorjuice / Freepik</a>
    </div>
    <div className='flex gap-2'>
      <p className='font-medium text-gray'>Developed by</p>
      <a
        target='_blank'
        href='https://yahordev.netlify.app'
        className='font-bold text-white'
      >
        Yahor.dev
      </a>
    </div>
  </footer>
);

export default Footer;
