import { getSinglePost } from "@/lib/notion";
import { ArrowBottomLeftIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchBlogData(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Link href="/blog" className="text-blue-500 flex mr-auto items-center ">
        <ArrowLeftIcon className="mr-3" /> Go Back
      </Link>
      <div className=" my-4">
        <span>
          {post.publishedDate} | By {post.author}{" "}
        </span>
      </div>
      <h1 className="text-4xl  font-bold my-6 dark:text-white">{post.title}</h1>
      <div
        className="prose dark:prose-h2:text-white dark:prose-blockquote:text-white dark:prose-a:text-white dark:text-white prose-code:flex"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </main>
  );
}

async function fetchBlogData(slug: string) {
  const res = getSinglePost(slug);
  return res;
}
