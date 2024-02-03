import Bio from "@/components/bio";
import TextRotator from "@/components/text-rotator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, BellIcon, CheckIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

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

      {/* <div className="flex flex-col items-center justify-center mt-5 md:flex-row md:space-x-2">
        <Bio />
      </div> */}

      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Featured Projects</h2>

        <Link href={"/projects"}>
          <Button variant={"link"}>
            See All <ArrowRightIcon className="ml-2" />
          </Button>
        </Link>
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-3 md:space-x-2 md:space-y-0  space-y-2 ">
        <Card className="transform transition-transform duration-200 hover:scale-105 ">
          <CardHeader>
            <CardTitle>ByeByeSick</CardTitle>
            <CardDescription>
              A Healthcare Platform for everyone.
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <Image
              src={"/img/byebyesick.png"}
              alt={""}
              width={500}
              height={500}
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Visit</Button>
          </CardFooter>
        </Card>
        <Card className="transform transition-transform duration-200 hover:scale-105 ">
          <CardHeader>
            <CardTitle>Simple E-Commerce</CardTitle>
            <CardDescription>
              A mini marketplace to order some products.
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <Image
              src={"/img/ecommerce.png"}
              alt={""}
              width={500}
              height={500}
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Visit</Button>
          </CardFooter>
        </Card>
        <Card className="transform transition-transform duration-200 hover:scale-105 ">
          <CardHeader>
            <CardTitle>Chill Out</CardTitle>
            <CardDescription>
              A website to help you study perfectly.
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <Image src={"/img/chill.png"} alt={""} width={500} height={500} />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Visit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
