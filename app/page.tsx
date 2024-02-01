import Bio from "@/components/bio";
import TextRotator from "@/components/text-rotator";
import { ArrowTopRightIcon, FileIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="flex flex-col space-y-9 ">
      <h1 className="mt-3 text-5xl font-bold text-center md:mt-0">
        Muhammad Yafi Alhakim
      </h1>
      <TextRotator />

      <p className="leading-relaxed text-center">
        In my spare time, I train using LeetCode exercises and sharpening my Git
        skills by contributing to open-source projects. I also love to learn new
        things and try to implement them in my projects.
      </p>

      <div className="flex flex-col items-center justify-center mt-5 md:flex-row md:space-x-2">
        <Bio />
        <div className="mt-3"></div>
      </div>

      <div className="flex items-center justify-center mt-5 space-x-2"></div>
    </div>
  );
}
