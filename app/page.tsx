import TypingAnimation from "@/components/rotate-text";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-9 min-h-[50vh]">
      <div className="flex flex-col space-y-3">
        <h1 className="mt-3 text-3xl font-bold  md:mt-0">
          Muhammad Yafi Alhakim 😎
        </h1>

        {/* <div className="text-[#00DC82] text-2xl font-bold ">
          Frontend Engineer
        </div> */}
        <TypingAnimation
          className="text-2xl font-bold text-[#00DC82]"
          text="Frontend Engineer"
        />

        <p className="leading-relaxed ">
          {" "}
          I&apos;m a passionate Frontend Engineer from Indonesia, dedicated to
          crafting beautiful web applications and websites.
        </p>
      </div>

      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Featured Projects</h2>

        <Link href={"/projects"}>
          <Button variant={"link"}>
            See All <ArrowRightIcon className="ml-2" />
          </Button>
        </Link>
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-3 md:space-x-2 md:space-y-0  space-y-2 ">
        <Card className="transform transition-transform duration-200 hover:scale-105  dark:bg-neutral-900 border-transparent ">
          <CardHeader>
            <CardTitle>Summarizer</CardTitle>
            <CardDescription>
              A tool to summarize your text into a few sentences with AI.
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <Image src={"/img/sumz.png"} alt={""} width={500} height={500} />
          </CardContent>
          <CardFooter>
            <Link
              href={"https://summarizer-drab.vercel.app/"}
              className="w-full "
            >
              <Button className="w-full bg-[#00DC82]  dark:bg-neutral-200">
                Visit
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="transform transition-transform duration-200 hover:scale-105  dark:bg-neutral-900 border-transparent">
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
            <Link
              href={"https://simple-ecommerce-appdir.vercel.app/"}
              className="w-full"
            >
              <Button className="w-full bg-[#00DC82]  dark:bg-neutral-200">
                Visit
              </Button>{" "}
            </Link>{" "}
          </CardFooter>
        </Card>
        <Card className="transform transition-transform duration-200 hover:scale-105  dark:bg-neutral-900 border-transparent">
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
            <Link href={"https://chill-out.vercel.app/"} className="w-full">
              <Button className="w-full bg-[#00DC82]  dark:bg-neutral-200">
                Visit
              </Button>{" "}
            </Link>{" "}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
