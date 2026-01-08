import { getSolarBlogs } from "@/lib/rss";
import { Box, Heading, Text } from "@chakra-ui/react";

export async function generateStaticParams() {
  const posts = await getSolarBlogs();
  return posts.map((p) => ({ slug: p.slug }));
}

export const revalidate = 86400;

export default async function BlogDetail({ params }) {
  const posts = await getSolarBlogs();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return null;

  return (
    <Box bg="black" color="white" px={6} py={16}>
      <Heading color="yellow.400" mb={4}>
        {post.title}
      </Heading>

      <Text color="gray.400" mb={8}>
        {post.source} • {new Date(post.date).toDateString()}
      </Text>

      <Text fontSize="lg" whiteSpace="pre-line">
        {post.content}
      </Text>
    </Box>
  );
}
