"use client";

import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Button,
  Flex,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);

const slides = [
  {
    image: "/images/install-hero2.jpg",
    title: "Precision Solar Installation",
    description:
      "Our certified engineers ensure your solar system is installed with perfection.",
  },
  {
    image: "/images/install-hero3.jpg",
    title: "Safety & Efficiency",
    description:
      "Every panel and inverter is installed following strict safety standards.",
  },
  {
    image: "/images/install-hero4.jpg",
    title: "Customized Solutions",
    description:
      "Installation tailored to your roof, energy needs, and budget.",
  },
  {
    image: "/images/install-hero5.jpg",
    title: "End-to-End Service",
    description: "From assessment to activation, we handle everything seamlessly.",
  },
];

export default function InstallationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: "Site Assessment",
      description:
        "Our engineers evaluate roof space, sunlight exposure, and power requirements.",
      image: "/images/install-site.jpg",
    },
    {
      title: "System Design",
      description:
        "Customized solar system design optimized for efficiency, aesthetics, and budget.",
      image: "/images/system-design.jpg",
    },
    {
      title: "Installation",
      description:
        "Panels, inverters, and wiring installed professionally to industry standards.",
      image: "/images/installation.jpg",
    },
    {
      title: "Inspection & Testing",
      description:
        "Full system check and safety inspection before powering up your solar system.",
      image: "/images/inspection-test.jpg",
    },
  ];

  return (
    <Box
      maxW="100%"  // <- prevent vw overflow
      overflowX="hidden" // <- hide any accidental overflow
      bgImage="url('/images/install-hero-bg.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      {/* ================= HERO SECTION ================= */}
      <Box w="100%" minH={{ base: "400px", md: "700px" }} position="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.3,
            zIndex: 0,
          }}
        >
          <source src="/videos/installation-bg.mp4" type="video/mp4" />
        </video>

        <AnimatePresence mode="wait">
          {slides.map(
            (slide, index) =>
              index === currentSlide && (
                <MotionBox
                  key={slide.title}
                  position="absolute"
                  top={0}
                  left={0}
                  w="100%"
                  h="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  px={4}
                  textAlign="center"
                  zIndex={1}
                  backgroundImage={`url(${slide.image})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1 }}
                >
                  <VStack spacing={4} zIndex={2} maxW="700px" mx="auto">
                    <Heading
                      fontSize={{ base: "2xl", md: "5xl" }}
                      color="yellow.400"
                      textShadow="2px 2px 8px black"
                    >
                      {slide.title}
                    </Heading>
                    <Text
                      fontSize={{ base: "sm", md: "lg" }}
                      color="whiteAlpha.900"
                      fontWeight="bold"
                      textShadow="1px 1px 4px black"
                    >
                      {slide.description}
                    </Text>
                    <Button
                      mt={4}
                      bg="yellow.400"
                      color="black"
                      _hover={{ bg: "yellow.300", transform: "scale(1.05)" }}
                      shadow="xl"
                      as="a"
                      href="/contact"
                    >
                      Get A Quote
                    </Button>
                  </VStack>
                </MotionBox>
              )
          )}
        </AnimatePresence>
      </Box>

      {/* ================= STEP-BY-STEP GRID ================= */}
      <Box maxW="1200px" mx="auto" px={4} py={16}>
        <Heading
          textAlign="center"
          color="yellow.400"
          mb={12}
          textShadow="2px 2px 8px black"
        >
          How Installation Works
        </Heading>

        <SimpleGrid
          columns={{ base: 2, md: 2 }}
          spacing={6}
          w="100%"
          overflow="hidden"
        >
          {steps.map((step, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              bg="whiteAlpha.100"
              backdropFilter="blur(14px)"
              rounded="2xl"
              shadow="2xl"
              overflow="hidden"
              w="100%"
              maxW="100%" // ensure it never exceeds container
            >
              <Box w="100%">
                <Image
                  src={step.image}
                  alt={step.title}
                  w="100%"
                  h={{ base: "200px", md: "250px" }}
                  objectFit="cover"
                  maxW="100%"
                />
              </Box>
              <VStack spacing={3} p={4}>
                <Heading
                  fontSize="xl"
                  color="yellow.400"
                  textShadow="1px 1px 4px black"
                >
                  {step.title}
                </Heading>
                <Text color="whiteAlpha.900" fontWeight="bold" textAlign="center">
                  {step.description}
                </Text>
              </VStack>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>

      {/* ================= COST SECTION ================= */}
      <Heading
        textAlign="center"
        color="yellow.400"
        mt={16}
        mb={8}
        textShadow="2px 2px 8px black"
      >
        Installation Costs
      </Heading>

      <SimpleGrid
        maxW="1200px"
        mx="auto"
        columns={{ base: 1, sm: 2 }}
        spacing={8}
        mb={16}
        px={4}
      >
        <MotionBox
          bg="whiteAlpha.100"
          backdropFilter="blur(14px)"
          rounded="2xl"
          shadow="2xl"
          p={6}
          textAlign="center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Heading fontSize="2xl" color="yellow.400" textShadow="1px 1px 3px black">
            $3,500 - $5,000
          </Heading>
          <Text color="whiteAlpha.900" fontWeight="bold" mt={2}>
            Typical 5kW residential solar installation including panels, inverter, and mounting.
          </Text>
        </MotionBox>

        <MotionBox
          bg="whiteAlpha.100"
          backdropFilter="blur(14px)"
          rounded="2xl"
          shadow="2xl"
          p={6}
          textAlign="center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Heading fontSize="2xl" color="yellow.400" textShadow="1px 1px 3px black">
            $10,000+
          </Heading>
          <Text color="whiteAlpha.900" fontWeight="bold" mt={2}>
            Commercial solar installation costs vary depending on system size and complexity.
          </Text>
        </MotionBox>
      </SimpleGrid>
    </Box>
  );
}
