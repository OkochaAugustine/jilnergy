"use client";

import { Box, VStack, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function BatteryPage() {
  const batteries = [
    {
      title: "10 kWh Felicity Lithium Iron Battery",
      description:
        "Paired with a 10kVA 48V Felicity inverter, 120A charge controller, and 15pcs 600W half-cut solar panels. Ideal for residential and small commercial setups.",
      capacity: "10 kWh",
      inverter: "10 kVA, 48V Felicity",
      controller: "120A Felicity Charge Controller",
      panels: "15 x 600W Half-Cut Solar Panels",
      price: "₦8,000,000",
      image: "/images/battery3.jpg",
    },
    {
      title: "30 kWh Felicity Lithium Iron Battery",
      description:
        "Expanded setup for medium to large homes or small businesses. Includes all accessories and engineered for reliable power delivery.",
      capacity: "30 kWh",
      inverter: "10 kVA, 48V Felicity",
      controller: "120A Felicity Charge Controller",
      panels: "45 x 600W Half-Cut Solar Panels",
      price: "₦13,000,000",
      image: "/images/kwh.jpg", // Updated image here
    },
    {
      title: "15 kWh Felicity Battery Setup",
      description:
        "Optimized for medium homes or offices. Includes inverter, charge controller, and full solar panel setup. Video demo included.",
      capacity: "15 kWh",
      inverter: "10 kVA, 48V Felicity",
      controller: "120A Felicity Charge Controller",
      panels: "22 x 600W Half-Cut Solar Panels",
      price: "₦10,500,000",
      video: "/videos/battery-setup.mp4",
    },
  ];

  const heroBatteryImages = [
    "/images/battery1.jpg",
    "/images/battery2.jpg",
    "/images/battery3.jpg",
    "/images/battery4.jpg",
  ];

  return (
    <Box w="100%" overflowX="hidden" bg="gray.900" color="white">
      {/* ================= HERO SECTION ================= */}
      <Box
        minH={{ base: "450px", md: "750px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={4}
        position="relative"
        bgImage="url('/images/battery-hero.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box position="absolute" inset={0} bg="blackAlpha.600" />

        <VStack spacing={6} zIndex={2} maxW="900px">
          <Heading
            fontSize={{ base: "2xl", md: "5xl" }}
            color="yellow.400"
            textShadow="2px 2px 14px black"
          >
            Solar Batteries & Power Systems
          </Heading>
          <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="bold" color="white">
            Explore our battery setups, their capacities, what they can power, and full pricing for residential and commercial solar installations.
          </Text>
        </VStack>

        {/* Animated Battery Images */}
        {heroBatteryImages.map((src, index) => (
          <MotionBox
            key={index}
            position="absolute"
            top={`${15 + index * 10}%`}
            left={`${10 + index * 20}%`}
            w={{ base: "80px", md: "150px" }}
            h={{ base: "80px", md: "150px" }}
            zIndex={3}
            animate={{
              rotateY: [0, 360],
              y: [0, -15, 0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 10 + index * 2,
              ease: "easeInOut",
            }}
          >
            <Image
              src={src}
              alt={`Battery ${index + 1}`}
              w="100%"
              h="100%"
              objectFit="contain"
              borderRadius="md"
              boxShadow="2xl"
            />
          </MotionBox>
        ))}
      </Box>

      {/* ================= BATTERY CARDS ================= */}
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} py={20}>
        <Heading
          textAlign="center"
          color="yellow.400"
          mb={14}
          textShadow="2px 2px 10px black"
        >
          Battery Options & Capacities
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {batteries.map((bat, index) => (
            <MotionBox
              key={index}
              bg="whiteAlpha.100"
              backdropFilter="blur(14px)"
              rounded="2xl"
              shadow="2xl"
              overflow="hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {bat.video ? (
                <Box w="100%" h={{ base: "200px", md: "220px" }} overflow="hidden">
                  <video
                    src={bat.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
              ) : (
                <Image
                  src={bat.image}
                  alt={bat.title}
                  w="100%"
                  h={{ base: "200px", md: "220px" }}
                  objectFit="cover"
                />
              )}
              <VStack spacing={3} p={6}>
                <Heading fontSize="xl" color="yellow.400" textAlign="center">
                  {bat.title}
                </Heading>
                <Text color="whiteAlpha.900" fontWeight="bold" textAlign="center">
                  {bat.description}
                </Text>
                <Text color="yellow.300" fontWeight="bold">
                  Capacity: {bat.capacity}
                </Text>
                <Text color="whiteAlpha.800">Inverter: {bat.inverter}</Text>
                <Text color="whiteAlpha.800">Controller: {bat.controller}</Text>
                <Text color="whiteAlpha.800">Panels: {bat.panels}</Text>
                <Heading color="yellow.400" fontSize="2xl">
                  {bat.price}
                </Heading>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
