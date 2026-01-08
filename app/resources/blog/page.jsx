import { getSolarBlogs } from "@/lib/rss";
import BlogClient from "./BlogClient";
import FeaturedCarousel from "./FeaturedCarouse";

export const revalidate = 86400; // 🔥 Auto refresh every 24 hours

export default async function BlogPage() {
  const posts = await getSolarBlogs();

  return (
    <>
      <FeaturedCarousel posts={posts.slice(0, 5)} />
      <BlogClient posts={posts} />
    </>
  );
}
