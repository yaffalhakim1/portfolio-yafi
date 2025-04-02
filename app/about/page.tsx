import { Heading } from '@/components/anim/heading';
import { Animate } from '@/components/anim/text';
import {
  IconNextjs,
  IconReactjs,
  IconFlutter,
  IconSupabase,
  IconTailwind,
  IconTypescript,
  IconDart,
  LinkedinIcon,
  GitHubIcon,
  EmailIcon,
} from '@/components/icons';
import Tooltips from '@/components/tooltips';
import { ArrowTopRightIcon, FileIcon } from '@radix-ui/react-icons';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <Heading className='font-bold text-[36px]'>About Me</Heading>
      <Animate>
        <p className='mb-5'>
          I&apos;m Yafi, a <span className='font-bold'>Frontend Engineer</span>
        </p>
        <p className='text-justify md:w-9/12 text-sm leading-relaxed'>
          A Frontend Engineer with 1+ year of experience in building web and
          mobile applications. I have a strong passion for learning new
          technologies and building products that can help people. I have
          experience working with NextJS, ReactJS, NodeJS.
          <br /> <br />I work full-time as a Frontend Engineer and also have
          experience in Fullstack development through freelance and side
          projects. I am very passionate about modern mobile and web
          technologies, always keeping developer experience (DX) in mind.
        </p>
      </Animate>

      <div className='my-4 border md:w-9/12' />

      <Animate>
        <h2 className='text-lg font-bold mb-4'>Current Tech Stack</h2>
        <div className='flex space-x-4'>
          <Tooltips
            trigger={<IconNextjs width='24px' height='24px' />}
            content='NextJS'
          />
          <Tooltips
            trigger={<IconReactjs width='24px' height='24px' />}
            content='ReactJS'
          />
          <Tooltips
            trigger={<IconFlutter width='24px' height='24px' />}
            content='Flutter'
          />
          <Tooltips
            trigger={<IconSupabase width='24px' height='24px' />}
            content='Supabase'
          />
          <Tooltips
            trigger={<IconTailwind width='24px' height='24px' />}
            content='TailwindCSS'
          />
          <Tooltips
            trigger={<IconTypescript width='24px' height='24px' />}
            content='Typescript'
          />
          <Tooltips
            trigger={<IconDart width='24px' height='24px' />}
            content='Dart'
          />
        </div>
      </Animate>

      <Animate>
        <div className='flex flex-col gap-2 md:flex-row md:gap-2'>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://yafi-cv.vercel.app/'
            className='flex items-center justify-between w-full p-4 no-underline transition-all border rounded-lg md:w-3/12 border-neutral-800 hover:bg-[#131B30] hover:text-white'
          >
            <div className='flex items-center'>
              <FileIcon />
              <div className='ml-3'>CV</div>
            </div>
            <ArrowTopRightIcon />
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.linkedin.com/in/yafialhakim/'
            className='flex items-center justify-between w-full p-4 no-underline transition-all border rounded-lg md:w-3/12 border-neutral-800 hover:bg-[#131B30] hover:text-white hover:dark:hover:bg-[#131B30] hover:dark:text-white'
          >
            <div className='flex items-center'>
              <LinkedinIcon />
              <div className='ml-3'>Linkedin</div>
            </div>
            <ArrowTopRightIcon />
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/yaffalhakim1'
            className='flex items-center justify-between w-full p-4 no-underline transition-all border rounded-lg md:w-3/12 border-neutral-800 hover:bg-[#131B30] hover:text-white hover:dark:hover:bg-[#131B30] hover:dark:text-white'
          >
            <div className='flex items-center'>
              <GitHubIcon />
              <div className='ml-3'>GitHub</div>
            </div>
            <ArrowTopRightIcon />
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='mailto:yafialhakim64@email.com'
            className='flex items-center justify-between w-full p-4 no-underline transition-all border rounded-lg md:w-3/12 border-neutral-800 hover:bg-[#131B30] hover:text-white hover:dark:hover:bg-[#131B30] hover:dark:text-white'
          >
            <div className='flex items-center'>
              <EmailIcon />
              <div className='ml-3'>Email</div>
            </div>
            <ArrowTopRightIcon />
          </a>
        </div>
      </Animate>
    </div>
  );
};

export default page;
