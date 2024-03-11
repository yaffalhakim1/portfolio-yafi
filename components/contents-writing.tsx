import React from "react";
import { ArrowIcon } from "./icons";
import Link from "next/link";

interface ItemProps {
  href?: string;
  title?: string;
  desc?: string;
  publishedDate?: Date;
  slug: string;
}

export default function Writing(props: ItemProps) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-2 cursor-pointer">
      <Link
        rel="noopener noreferrer"
        href={`/blog/${encodeURIComponent(props.slug)}`}
        className="flex w-full border border-neutral-800 rounded-lg p-4 no-underline items-center  hover:bg-neutral-900 hover:text-white hover:dark:bg-neutral-900  hover:dark:text-white  transition-all justify-between"
      >
        <div className=" items-center">
          <span className="ml-3 text-gray-500 mb-2 text-sm">
            {props.publishedDate?.toString()}
          </span>

          <div className="ml-3 text-lg font-bold">{props.title}</div>
          <div className="ml-3 text-sm mt-2 font-extralight">{props.desc}</div>
        </div>
      </Link>
    </div>
  );
}
