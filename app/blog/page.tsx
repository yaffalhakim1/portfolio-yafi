import Writing from "@/components/contents-writing";
import { getAllPublishedBlog } from "@/lib/notion";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await fetchBlogData();

  return (
    <div>
      <h1 className="font-bold text-[36px]">Writings</h1>
      <p>
        Here are some of my writings. All of my writings are available on my{" "}
        <span>
          <a
            href="https://yafialhakimblog.vercel.app/"
            className="text-[#00DC82] hover:underline"
          >
            blog
          </a>
        </span>
        .
      </p>
      <div className="flex flex-col gap-4 mt-8">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col  mt-4">
            <Writing
              title={post.title}
              desc={post.description}
              publishedDate={post.publishedDate}
              slug={post.slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

async function fetchBlogData() {
  const res = getAllPublishedBlog();
  return res;
}
