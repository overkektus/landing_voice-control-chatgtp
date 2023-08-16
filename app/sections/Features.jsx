import React from 'react';
import Multilang from '@/app/assets/multilang.svg';
import VoiceInput from '@/app/assets/voice_input.svg';
import ReadAloud from '@/app/assets/read_aloud.svg';
import Feature from '@/app/components/Feature';

const features = [
  {
    icon: Multilang,
    title: 'Multilanguage support',
    description:
      'Enjoy conversations with ChatGPT in multiple languages for a truly global experience.',
  },
  {
    icon: ReadAloud,
    title: 'Read aloud',
    description:
      "Have ChatGPT's responses read aloud to you for a more immersive experience",
  },
  {
    icon: VoiceInput,
    title: 'Voice input',
    description:
      'Record your voice and submit your spoken questions to ChatGPT',
  },
];

const Features = () => (
  <section className='flex h-screen w-full flex-1 justify-center px-3 py-24 md:px-20 lg:px-52'>
    <div className='flex flex-col justify-evenly'>
      <h2 className='text-center text-4xl font-bold text-gray'>Features</h2>
      <div className='flex gap-10'>
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
