import { Heading } from '@/components/anim/heading';
import { Animate } from '@/components/anim/text';
import FeaturedCards from '@/components/featured-cards';
import { LocationCard } from '@/components/location-card';
import TypingAnimation from '@/components/rotate-text';
import { Button } from '@/components/ui/button';

import { ArrowRightIcon } from '@radix-ui/react-icons';

import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col space-y-9 min-h-[50dvh]'>
      <div className='flex flex-col space-y-3'>
        <Heading className='mt-3 text-3xl font-bold  md:mt-0 mb-5'>
          Hi, I&apos;m Yafi 😎
        </Heading>

        <Animate>
          <TypingAnimation
            className='text-2xl font-bold text-[#00DC82]'
            text='Frontend Engineer'
          />

          <p className='leading-relaxed text-sm'>
            {' '}
            I&apos;m a passionate Frontend Engineer from Indonesia, dedicated to
            crafting beautiful web applications and websites.
          </p>
        </Animate>
      </div>

      <FeaturedCards />
    </div>
  );
}
