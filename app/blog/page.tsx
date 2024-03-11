import Writing from "@/components/contents-writing";
import { getAllPublishedBlog } from "@/lib/notion";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await fetchBlogData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[672px] mx-auto">
        <h1 className="text-3xl font-bold mb-6">List Blog</h1>

        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="flex flex-col  mt-4">
              <Writing
                title={post.title}
                desc={post.description}
                publishedDate={post.publishedDate}
                slug={post.slug}
              />
            </div>
          ))
        )}
      </div>
    </main>
  );
}

async function fetchBlogData() {
  const res = getAllPublishedBlog();
  return res;
}
