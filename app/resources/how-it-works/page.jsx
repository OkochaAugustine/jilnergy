"use client";

import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function HowItWorksPage() {
  return (
    <Box w="100%" overflowX="hidden">

      {/* ================= HERO SECTION ================= */}
      <Box
        minH={{ base: "400px", md: "700px" }}
        position="relative"
        overflow="hidden"
      >
        {/* Video Background */}
        <video
          src="/videos/how-it-works.mp4"
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
            zIndex: 0,
          }}
        />
        {/* No overlay — video is fully clear */}

        <VStack
          zIndex={1}
          position="relative"
          spacing={6}
          align="center"
          justify="center"
          minH={{ base: "400px", md: "700px" }}
        >
          <Heading
            fontSize={{ base: "2xl", md: "5xl" }}
            color="yellow.400"
            textShadow="2px 2px 14px black"
          >
            
          </Heading>
        </VStack>
      </Box>

      {/* ================= SOLAR PANEL CAPTURE ================= */}
      <Box maxW="1200px" mx="auto" px={4} py={16}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          mb={12}
        >
          <Box w={{ base: "100%", md: "50%" }} mb={{ base: 6, md: 0 }}>
            <Image
              src="/images/how-it-works.jpg"
              alt="Solar Panel Capture"
              w="100%"
              h={{ base: "250px", md: "300px" }}
              objectFit="cover"
              rounded="2xl"
            />
          </Box>
          <VStack
            w={{ base: "100%", md: "50%" }}
            spacing={4}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading fontSize="2xl" color="yellow.400">
              Solar Panels Capture Sunlight
            </Heading>
            <Text color="whiteAlpha.900" fontWeight="bold">
              Photovoltaic cells in solar panels convert sunlight into DC electricity,
              generating clean, renewable energy for your home or business.
            </Text>
          </VStack>
        </Flex>

        {/* ================= INVERTER ================= */}
        <Flex
          direction={{ base: "column", md: "row-reverse" }}
          align="center"
          mb={12}
        >
          <Box w={{ base: "100%", md: "50%" }} mb={{ base: 6, md: 0 }}>
            <Image
              src="/images/how-it-works2.jpg"
              alt="Inverter Conversion"
              w="100%"
              h={{ base: "250px", md: "300px" }}
              objectFit="cover"
              rounded="2xl"
            />
          </Box>
          <VStack
            w={{ base: "100%", md: "50%" }}
            spacing={4}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading fontSize="2xl" color="yellow.400">
              Inverter Converts DC to AC
            </Heading>
            <Text color="whiteAlpha.900" fontWeight="bold">
              The inverter converts the DC electricity from panels into AC electricity,
              which powers appliances and devices in your home or business.
            </Text>
          </VStack>
        </Flex>

        {/* ================= BATTERY STORAGE ================= */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          mb={12}
        >
          <Box w={{ base: "100%", md: "50%" }} mb={{ base: 6, md: 0 }}>
            <Image
              src="/images/battery2.jpg"
              alt="Battery Storage"
              w="100%"
              h={{ base: "250px", md: "300px" }}
              objectFit="cover"
              rounded="2xl"
            />
          </Box>
          <VStack
            w={{ base: "100%", md: "50%" }}
            spacing={4}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading fontSize="2xl" color="yellow.400">
              Battery Storage
            </Heading>
            <Text color="whiteAlpha.900" fontWeight="bold">
              Excess energy is stored in batteries for use at night or during low sunlight periods,
              ensuring uninterrupted power supply and energy independence.
            </Text>
          </VStack>
        </Flex>

        {/* ================= MONITORING & OPTIMIZATION ================= */}
        <Box textAlign="center" mt={16}>
          <Heading fontSize="3xl" color="yellow.400" mb={6}>
            Monitoring & Optimization
          </Heading>
          <Text color="whiteAlpha.900" fontWeight="bold" maxW="900px" mx="auto">
            Solar systems are equipped with smart monitoring tools that track energy
            production, consumption, and efficiency. Optimizing system performance
            ensures maximum savings, longer system life, and a sustainable energy footprint.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
