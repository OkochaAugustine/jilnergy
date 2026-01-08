"use client";

import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);

const PROJECTS = [
  {
    title: "Solar Farm Lagos",
    description: "Large-scale solar farm installation powering thousands of homes.",
    image: "/images/install-hero2.jpg",
    href: "/services/installation/",
  },
  {
    title: "Residential Roofs Abuja",
    description: "High-efficiency rooftop solar systems for residential buildings.",
    image: "/images/roof.jpg",
    href: "/services/installation/",
  },
  {
    title: "Commercial Panels Port Harcourt",
    description: "Smart solar solutions for commercial buildings and offices.",
    image: "/images/install-hero3.jpg",
    href: "/services/installation/",
  },
  {
    title: "Community Solar Kano",
    description: "Reliable community-based solar installations for schools and clinics.",
    image: "/images/install-hero5.jpg",
    href: "/services/installation/",
  },
];

export default function FeaturedProjectsGrid() {
  const [projectIndex, setProjectIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const currentProject = PROJECTS[projectIndex];

  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 1.02 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.98 },
  };

  const imageVariants = {
    animate: { scale: [1, 1.06, 1], rotate: [0, 0.3, 0] },
    transition: { duration: 16, ease: "linear", repeat: Infinity },
  };

  return (
    <Box
      w="full"
      py={{ base: 16, md: 28 }}
      px={{ base: 4, md: 20 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        inset={0}
        bgImage="url('/images/ben-bg.jpg')" // reuse your benefits background
        bgSize="cover"
        bgPosition="center"
        filter="brightness(0.25)"
        zIndex={-1}
      />

      <Heading
        fontSize={{ base: "3xl", md: "5xl" }}
        mb={12}
        color="yellow.400"
        textAlign="center"
      >
        Featured Projects
      </Heading>

      <AnimatePresence mode="wait">
        <MotionBox
          key={currentProject.title}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
          bg="whiteAlpha.900"
          rounded="2xl"
          shadow="2xl"
          overflow="hidden"
          position="relative"
          maxW="full"
          mx="auto"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
        >
          {/* Glow effect behind card */}
          <MotionBox
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="linear-gradient(135deg, rgba(255,255,0,0.08), transparent)"
            filter="blur(60px)"
            zIndex={0}
          />

          {/* Project Image */}
          <MotionBox
            flex="1"
            minH={{ base: "200px", md: "300px" }}
            overflow="hidden"
            variants={imageVariants}
            animate="animate"
          >
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              objectFit="contain"
              w="100%"
              h="100%"
            />
          </MotionBox>

          {/* Project Info */}
          <VStack
            flex="1"
            align={{ base: "center", md: "start" }}
            spacing={4}
            p={{ base: 6, md: 12 }}
            zIndex={1}
          >
            <Heading fontSize={{ base: "xl", md: "2xl" }} color="yellow.400">
              {currentProject.title}
            </Heading>
            <Text color="gray.700" textAlign={{ base: "center", md: "left" }}>
              {currentProject.description}
            </Text>
            <Link
              href={currentProject.href}
              color="yellow.400"
              fontWeight="bold"
              _hover={{ textDecoration: "underline" }}
            >
              View Project →
            </Link>
          </VStack>
        </MotionBox>
      </AnimatePresence>
    </Box>
  );
}
