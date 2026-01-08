"use client";

import React, { useState, useEffect } from "react";
import { Box, Flex, VStack, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const TESTIMONIALS = [
  {
    name: "Laura Doe",
    role: "CEO, SolarTech",
    photo: "/images/client1.jpg",
    quote:
      "The solar installation was seamless and highly efficient. Absolutely recommend!",
  },
  {
    name: "Jane Smith",
    role: "Homeowner, Abuja",
    photo: "/images/client2.jpg",
    quote:
      "Our home is now fully powered by solar. The team was professional and reliable.",
  },
  {
    name: "Victoria Ade",
    role: "School Principal, Kano",
    photo: "/images/client3.jpg",
    quote:
      "Thanks to their solar solutions, our school now has uninterrupted electricity.",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[index];

  const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 1.05 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -40, scale: 0.95 },
  };

  const imageVariants = {
    animate: { scale: [1, 1.06, 1], rotate: [0, 0.3, 0] },
    transition: { duration: 18, ease: "linear", repeat: Infinity },
  };

  return (
    <Box
      w="full"
      minH="100vh"
      position="relative"
      overflow="hidden"
      py={{ base: 16, md: 28 }}
      px={{ base: 4, md: 20 }}
    >
      {/* Background Gradient */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-b, #081513, #0b1d1a)"
        zIndex={-2}
      />

      {/* Background Image */}
      <Box
        position="absolute"
        inset={0}
        bgImage="url('/images/testi.jpg')"
        bgSize="cover"
        bgPosition="center"
        filter="brightness(0.25)"
        zIndex={-1}
      />

      {/* Section Heading */}
      <Heading
        fontSize={{ base: "3xl", md: "5xl" }}
        mb={12}
        color="yellow.400"
        textAlign="center"
      >
        What Our Clients Say
      </Heading>

      <Flex
        w="full"
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        gap={12}
      >
        {/* Left Column – Testimonial Text */}
        <MotionBox
          key={current.name}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
          flex="1"
        >
          <VStack align={{ base: "center", md: "start" }} spacing={6}>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              color="gray.200"
              textAlign={{ base: "center", md: "left" }}
            >
              "{current.quote}"
            </Text>
            <VStack align={{ base: "center", md: "start" }} spacing={0}>
              <Text
                fontWeight="bold"
                fontSize={{ base: "md", md: "xl" }}
                color="yellow.400"
              >
                {current.name}
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.700">
                {current.role}
              </Text>
            </VStack>
          </VStack>
        </MotionBox>

        {/* Right Column – Client Photo (TV Style) */}
        <MotionBox
          flex="1"
          maxW="480px"
          h={{ base: "320px", md: "420px" }} // slightly taller for heads
          rounded="2xl"
          overflow="hidden"
          boxShadow="0 30px 80px rgba(0,0,0,0.6)"
          border="1px solid rgba(255,255,255,0.15)"
          variants={imageVariants}
          animate="animate"
        >
          <Image
            src={current.photo}
            alt={current.name}
            objectFit="contain" // ✅ show full head
            w="100%"
            h="100%"
            bg="black"
          />

          {/* Top Overlay */}
          <Box
            position="absolute"
            top={4}
            left={4}
            px={4}
            py={2}
            bg="blackAlpha.700"
            rounded="full"
            color="white"
            fontSize="sm"
          >
            Verified Client
          </Box>

          {/* Bottom Overlay */}
          <Box
            position="absolute"
            bottom={4}
            right={4}
            px={4}
            py={2}
            bg="yellow.400"
            color="black"
            rounded="full"
            fontWeight="bold"
            fontSize="sm"
          >
            Solar Solutions
          </Box>
        </MotionBox>
      </Flex>
    </Box>
  );
}
