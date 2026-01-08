"use client";

import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);

// Example slides (replace with real images/content)
const slides = [
  {
    title: "High-Efficiency Solar Panels",
    description: "Cutting-edge panels for maximum energy generation.",
    image: "/images/solar-panel-1.jpg",
    link: "/services#panels",
  },
  {
    title: "Smart Battery Storage",
    description: "Reliable energy storage for day & night power needs.",
    image: "/images/battery-1.jpg",
    link: "/services#batteries",
  },
  {
    title: "Advanced Inverters",
    description: "Optimized power conversion for your home or business.",
    image: "/images/inverter-1.jpg",
    link: "/services#inverters",
  },
  {
    title: "Rooftop Installations",
    description: "Professional setup for residential & commercial buildings.",
    image: "/images/rooftop.jpg",
    link: "/projects",
  },
];

export default function AnimatedSlides() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  const pageVariants = {
    initial: { rotateY: -90, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    exit: { rotateY: 90, opacity: 0 },
  };

  return (
    <Box
      position="relative"
      w="full"
      h={{ base: "60vh", md: "80vh" }}
      overflow="hidden"
      bg="black"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      perspective="1200px"
    >
      <AnimatePresence mode="wait">
        <MotionBox
          key={current.title}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1 }}
          w={{ base: "90%", md: "70%" }}
          h={{ base: "70%", md: "75%" }}
          bgImage={`url(${current.image})`}
          bgSize="cover"
          bgPosition="center"
          borderRadius="2xl"
          shadow="2xl"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          p={8}
          textShadow="2px 2px 8px rgba(0,0,0,0.7)"
        >
          <VStack align="start" spacing={4}>
            <Heading fontSize={{ base: "2xl", md: "4xl" }} color="yellow.400">
              {current.title}
            </Heading>
            <Text fontSize={{ base: "sm", md: "lg" }}>{current.description}</Text>
            <Button
              size="md"
              colorScheme="yellow"
              as="a"
              href={current.link}
            >
              Learn More
            </Button>
          </VStack>
        </MotionBox>
      </AnimatePresence>

      {/* Navigation dots */}
      <Box position="absolute" bottom={6} left="50%" transform="translateX(-50%)">
        <Box display="flex" gap={2}>
          {slides.map((_, i) => (
            <Box
              key={i}
              w={index === i ? 12 : 6}
              h={2}
              bg={index === i ? "yellow.400" : "whiteAlpha.500"}
              borderRadius="full"
              cursor="pointer"
              onClick={() => setIndex(i)}
              transition="all 0.3s"
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
