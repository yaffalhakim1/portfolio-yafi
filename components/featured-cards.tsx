'use client';

import { Motion } from './anim/motion';

import { LocationCard } from './location-card';
import { TimeCard } from './time-card';

export default function FeaturedCards() {
  return (
    <Motion
      asChild
      animate='visible'
      variants={{
        visible: {
          transition: { delayChildren: 0.25, staggerChildren: 0.1 },
        },
      }}
    >
      <section className='mt-8 grid grid-cols-8 grid-rows-5 gap-4 md:grid-cols-7 md:grid-rows-3'>
        <LocationCard />
        <TimeCard />
      </section>
    </Motion>
  );
}
