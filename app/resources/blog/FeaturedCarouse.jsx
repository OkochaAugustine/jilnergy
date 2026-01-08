"use client";

import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);

export default function FeaturedCarousel({ posts }) {
  const [index, setIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % posts.length),
      6000
    );
    return () => clearInterval(t);
  }, [posts.length]);

  const post = posts[index];

  const handleReadFullStory = (post) => {
    setSelectedPost(post);
    onOpen();
  };

  return (
    <Box bg="black" py={20} textAlign="center">
      <AnimatePresence mode="wait">
        <MotionBox
          key={post.slug}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <VStack spacing={4} maxW="900px" mx="auto">
            <Heading color="yellow.400" fontSize="4xl">
              {post.title}
            </Heading>

            <Text color="whiteAlpha.900" fontSize="lg" noOfLines={3}>
              {post.content}
            </Text>

            <Button
              bg="yellow.400"
              color="black"
              onClick={() => handleReadFullStory(post)}
            >
              Read Full Story
            </Button>
          </VStack>
        </MotionBox>
      </AnimatePresence>

      {/* ---------------- FULL ARTICLE MODAL ---------------- */}
      {selectedPost && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
          <ModalOverlay />
          <ModalContent bg="black" color="white">
            <ModalHeader>{selectedPost.title}</ModalHeader>
            <ModalCloseButton color="white" />
            <ModalBody>
              <Text color="gray.400" mb={4}>
                {selectedPost.source} • {new Date(selectedPost.date).toDateString()}
              </Text>
              <Text whiteSpace="pre-line">{selectedPost.content}</Text>
              <Button
                mt={6}
                bg="yellow.400"
                color="black"
                as="a"
                href={selectedPost.link}
                target="_blank"
              >
                Open Original Source
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}
