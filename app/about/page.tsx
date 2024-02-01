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
} from "@/components/icons";
import Tooltips from "@/components/tooltips";
import { ArrowTopRightIcon, FileIcon } from "@radix-ui/react-icons";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="font-bold text-[36px]">About Me</h1>
      <p>
        I&apos;m Yafi, a <span className="font-bold">Frontend Engineer</span>
      </p>
      <p className="text-justify md:w-9/12">
        I already have experience building web app and now currently i focused
        on pursuit my career as a Frontend Engineer.
      </p>
      <div className="my-4 border md:w-9/12" />
      <p className="text-justify md:w-9/12">
        My name is Muhammad Yafi Alhakim, and I&apos;m a Frontend Engineer based
        in Jakarta, Indonesia. I&apos;m passionate about good design and build
        things, and I love building for the web.
      </p>

      <p className="text-justify md:w-9/12">
        I&apos;m always learning and growing, and I&apos;m excited to see what
        the future holds. Thank you for visiting my website. If you have any
        questions or comments, please don&apos;t hesitate to contact me.
      </p>

      <h1 className="text-lg font-bold">Current Tech Stack</h1>
      <div className="flex space-x-2">
        <Tooltips
          trigger={<IconNextjs width="24px" height="24px" />}
          content="NextJS"
        />
        <Tooltips
          trigger={<IconReactjs width="24px" height="24px" />}
          content="ReactJS"
        />
        <Tooltips
          trigger={<IconFlutter width="24px" height="24px" />}
          content="Flutter"
        />
        <Tooltips
          trigger={<IconSupabase width="24px" height="24px" />}
          content="Supabase"
        />
        <Tooltips
          trigger={<IconTailwind width="24px" height="24px" />}
          content="TailwindCSS"
        />
        <Tooltips
          trigger={<IconTypescript width="24px" height="24px" />}
          content="Typescript"
        />
        <Tooltips
          trigger={<IconDart width="24px" height="24px" />}
          content="Dart"
        />
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/1Ms2fZxgGrVdZ0aaaoGDyc375p51U_wVg/view?usp=sharing"
          className="flex items-center justify-between w-full p-4 no-underline transition-all border rounded-lg md:w-3/12 border-neutral-800 hover:bg-neutral-900 hover:text-white"
        >
          <div className="flex items-center">
            <FileIcon />
            <div className="ml-3">CV</div>
          </div>
          <ArrowTopRightIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/yafialhakim/"
          className="flex items-center justify-between w-full p-4 no-underline transition-all border rounded-lg md:w-3/12 border-neutral-800 hover:bg-neutral-900 hover:text-white hover:dark:bg-neutral-900 hover:dark:text-white"
        >
          <div className="flex items-center">
            <LinkedinIcon />
            <div className="ml-3">Linkedin</div>
          </div>
          <ArrowTopRightIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/yaffalhakim1"
          className="flex items-center justify-between w-full p-4 no-underline transition-all border rounded-lg md:w-3/12 border-neutral-800 hover:bg-neutral-900 hover:text-white hover:dark:bg-neutral-900 hover:dark:text-white"
        >
          <div className="flex items-center">
            <GitHubIcon />
            <div className="ml-3">GitHub</div>
          </div>
          <ArrowTopRightIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:yafialhakim64@email.com"
          className="flex items-center justify-between w-full p-4 no-underline transition-all border rounded-lg md:w-3/12 border-neutral-800 hover:bg-neutral-900 hover:text-white hover:dark:bg-neutral-900 hover:dark:text-white"
        >
          <div className="flex items-center">
            <EmailIcon />
            <div className="ml-3">Email</div>
          </div>
          <ArrowTopRightIcon />
        </a>
      </div>
    </div>
  );
};

export default page;
