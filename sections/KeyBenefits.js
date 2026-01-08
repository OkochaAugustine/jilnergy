"use client";

import {
  Box,
  VStack,
  Heading,
  Text,
  Icon,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBolt, FaShieldAlt, FaLeaf, FaTools } from "react-icons/fa";

const MotionBox = motion(Box);

const BENEFITS = [
  {
    icon: FaBolt,
    title: "Reliable Energy",
    description:
      "Keep your home and business powered 24/7 with smart solar solutions.",
  },
  {
    icon: FaShieldAlt,
    title: "Safe & Certified",
    description:
      "All equipment is certified, tested, and installed professionally.",
  },
  {
    icon: FaLeaf,
    title: "Eco-Friendly",
    description: "Reduce your carbon footprint with renewable energy.",
  },
  {
    icon: FaTools,
    title: "Easy Maintenance",
    description:
      "Low-maintenance systems designed for hassle-free operation.",
  },
];

const SERVICES = [
  {
    title: "Solar Panels",
    description:
      "High-efficiency panels optimized for Nigerian sunlight conditions.",
    image: "/images/panels.jpg",
  },
  {
    title: "Battery Storage",
    description:
      "Reliable storage solutions for uninterrupted power supply.",
    image: "/images/home-hero2.jpg",
  },
  {
    title: "Inverters",
    description:
      "Smart inverters for optimized energy conversion and performance.",
    image: "/images/home-hero3.jpg",
  },
  {
    title: "Rooftop Installations",
    description:
      "Professional installations for homes and commercial buildings.",
    image: "/images/roof.jpg",
  },
];

export default function ServicesBenefitsGrid() {
  const [benefitIndex, setBenefitIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const benefitTimer = setInterval(() => {
      setBenefitIndex((prev) => (prev + 1) % BENEFITS.length);
    }, 5000);

    const serviceTimer = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % SERVICES.length);
    }, 5000);

    return () => {
      clearInterval(benefitTimer);
      clearInterval(serviceTimer);
    };
  }, []);

  const currentBenefit = BENEFITS[benefitIndex];
  const currentService = SERVICES[serviceIndex];

  const slideVariants = {
    initial: { rotateY: -15, opacity: 0, scale: 1.05 },
    animate: { rotateY: 0, opacity: 1, scale: 1 },
    exit: { rotateY: 15, opacity: 0, scale: 0.95 },
  };

  const imageVariants = {
    animate: { scale: [1, 1.08, 1], rotate: [0, 0.5, 0] },
    transition: { duration: 16, ease: "linear", repeat: Infinity },
  };

  return (
    <Box
      w="full"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 20 }}
      position="relative"
      overflow="hidden"
    >
      {/* BACKGROUND IMAGE */}
      <Box
        position="absolute"
        inset={0}
        bgImage="url('/images/ben-bg.jpg')"
        bgSize="cover"
        bgPosition="center"
        filter="brightness(0.35)"
        zIndex={-1}
      />

      <SimpleGrid
        columns={2} // force 2 columns on all screens
        spacing={10}
        alignItems="start"
        w="full"
      >
        {/* ---------------- OUR SERVICES ---------------- */}
        <Box>
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            mb={8}
            color="yellow.400"
          >
            Our Services
          </Heading>
          <AnimatePresence mode="wait">
            <MotionBox
              key={currentService.title}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              bg="whiteAlpha.900"
              rounded="2xl"
              shadow="2xl"
              overflow="hidden"
              p={4}
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              alignItems="center"
              position="relative"
            >
              {/* Subtle glow behind the card */}
              <MotionBox
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="linear-gradient(135deg, rgba(255,255,0,0.1), transparent)"
                filter="blur(50px)"
                zIndex={0}
              />

              <MotionBox
                flex="1"
                minH={{ base: "150px", md: "250px" }}
                position="relative"
                overflow="hidden"
                rounded="xl"
                variants={imageVariants}
                animate="animate"
              >
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  objectFit="contain"
                  w="100%"
                  h="100%"
                />
              </MotionBox>

              <VStack
                flex="1"
                align={{ base: "center", md: "start" }}
                spacing={4}
                p={6}
                zIndex={1}
              >
                <Heading
                  fontSize={{ base: "xl", md: "2xl" }}
                  color="yellow.400"
                >
                  {currentService.title}
                </Heading>
                <Text
                  color="gray.700"
                  textAlign={{ base: "center", md: "left" }}
                >
                  {currentService.description}
                </Text>
              </VStack>
            </MotionBox>
          </AnimatePresence>
        </Box>

        {/* ---------------- WHY CHOOSE US ---------------- */}
        <Box>
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            mb={8}
            color="yellow.400"
          >
            Why Choose Us
          </Heading>
          <AnimatePresence mode="wait">
            <MotionBox
              key={currentBenefit.title}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              bg="whiteAlpha.900"
              rounded="2xl"
              shadow="2xl"
              p={{ base: 6, md: 12 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              position="relative"
              overflow="hidden"
            >
              {/* Glow behind benefit */}
              <MotionBox
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="linear-gradient(45deg, rgba(255,255,0,0.08), transparent)"
                filter="blur(50px)"
                zIndex={0}
              />

              <Icon
                as={currentBenefit.icon}
                w={16}
                h={16}
                mb={4}
                color="yellow.400"
                zIndex={1}
              />
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                mb={2}
                zIndex={1}
              >
                {currentBenefit.title}
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "lg" }}
                color="gray.700"
                textAlign="center"
                zIndex={1}
              >
                {currentBenefit.description}
              </Text>
            </MotionBox>
          </AnimatePresence>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
