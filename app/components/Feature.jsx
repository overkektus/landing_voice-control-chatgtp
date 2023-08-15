import React from 'react';
import Image from 'next/image';

const Feature = ({ title, description, icon }) => (
  <div className='flex max-w-md flex-col items-center rounded-xl bg-white px-6 py-10 shadow-md'>
    <Image className='w-60' src={icon} />
    <h3 className='mb-6 text-xl font-medium'>{title}</h3>
    <p className=''>{description}</p>
  </div>
);

export default Feature;
