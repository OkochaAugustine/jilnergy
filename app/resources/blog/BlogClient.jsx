"use client";

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Input,
  Button,
  Badge,
  VStack,
  HStack,
  Switch,
} from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const POSTS_PER_PAGE = 6;
const CATEGORIES = ["All", "Solar News", "Tips", "Case Studies"];

export default function BlogClient({ posts = [] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [nigeriaOnly, setNigeriaOnly] = useState(false);
  const [page, setPage] = useState(1);

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const title = post.title?.toLowerCase() || "";
      const content = post.content?.toLowerCase() || "";

      const matchesSearch =
        title.includes(search.toLowerCase()) ||
        content.includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || post.category === category;

      const matchesNigeria = nigeriaOnly ? post.nigeria === true : true;

      return matchesSearch && matchesCategory && matchesNigeria;
    });
  }, [posts, search, category, nigeriaOnly]);

  /* ---------------- PAGINATION ---------------- */
  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  );

  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  /* ---------------- UI ---------------- */
  return (
    <Box bg="black" color="white" px={{ base: 4, md: 10 }} py={16}>
      {/* HEADER */}
      <VStack spacing={6} mb={10} textAlign="center">
        <Heading color="yellow.400">Solar Blog & Industry Updates</Heading>

        {/* SEARCH */}
        <Input
          maxW="500px"
          bg="white"
          color="black"
          placeholder="Search solar articles..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        {/* CATEGORIES */}
        <HStack spacing={3} flexWrap="wrap" justify="center">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              size="sm"
              bg={category === cat ? "yellow.400" : "whiteAlpha.200"}
              color="black"
              _hover={{ bg: "yellow.300" }}
              onClick={() => {
                setCategory(cat);
                setPage(1);
              }}
            >
              {cat}
            </Button>
          ))}
        </HStack>

        {/* NIGERIA FILTER */}
        <HStack pt={2}>
          <Switch
            colorScheme="yellow"
            isChecked={nigeriaOnly}
            onChange={() => {
              setNigeriaOnly(!nigeriaOnly);
              setPage(1);
            }}
          />
          <Text fontSize="sm">Nigeria-relevant content only</Text>
        </HStack>
      </VStack>

      {/* BLOG GRID */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {paginatedPosts.map((post) => (
          <MotionBox
            key={post.slug}
            bg="whiteAlpha.100"
            backdropFilter="blur(18px)"
            rounded="2xl"
            p={6}
            shadow="2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <HStack mb={2} spacing={2}>
              <Badge colorScheme="yellow">{post.category}</Badge>
              {post.nigeria && <Badge colorScheme="green">Nigeria</Badge>}
            </HStack>

            <Heading fontSize="lg" color="yellow.400" mb={2}>
              {post.title}
            </Heading>

            <Text fontSize="sm" noOfLines={4} mb={3}>
              {post.content}
            </Text>

            <Text fontSize="xs" color="gray.400">
              {post.source} •{" "}
              {post.date ? new Date(post.date).toDateString() : ""}
            </Text>

            <Button
              mt={4}
              size="sm"
              bg="yellow.400"
              color="black"
              as="a"
              href={`/resources/blog/${post.slug}`}
            >
              Read More
            </Button>
          </MotionBox>
        ))}
      </SimpleGrid>

      {/* EMPTY STATE */}
      {filteredPosts.length === 0 && (
        <Text textAlign="center" mt={10} color="gray.400">
          No articles found.
        </Text>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <HStack justify="center" spacing={6} mt={12}>
          <Button
            size="sm"
            isDisabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </Button>

          <Text fontSize="sm">
            Page {page} of {totalPages}
          </Text>

          <Button
            size="sm"
            isDisabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </HStack>
      )}
    </Box>
  );
}
