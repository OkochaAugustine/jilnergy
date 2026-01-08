"use client";

import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function PricingPage() {
  return (
    <Box w="100%" overflowX="hidden">

      {/* ================= HERO SECTION ================= */}
      <Box
        minH={{ base: "400px", md: "700px" }}
        position="relative"
        bgImage="url('/images/pricing-hero.jpg')" // replace with your hero bg file
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Box position="absolute" inset={0} bg="blackAlpha.600" />
        <VStack spacing={6} zIndex={1} maxW="900px">
          <Heading
            fontSize={{ base: "2xl", md: "5xl" }}
            color="yellow.400"
            textShadow="2px 2px 14px black"
          >
            Transparent Solar Pricing
          </Heading>
          <Text fontSize={{ base: "sm", md: "lg" }} color="white" fontWeight="bold">
            Understand exactly what goes into your solar investment — panels, batteries, inverters, installation, and maintenance. We make it clear so you can make confident decisions.
          </Text>
          <Button
            size="lg"
            bg="yellow.400"
            color="black"
            _hover={{ bg: "yellow.300", transform: "scale(1.08)" }}
            as="a"
            href="/contact"
          >
            Get a Quote
          </Button>
        </VStack>
      </Box>

      {/* ================= PRICING METHODOLOGY ================= */}
      <Box maxW="1200px" mx="auto" px={4} py={16}>
        <Heading
          textAlign="center"
          color="yellow.400"
          mb={12}
          textShadow="1px 1px 4px black"
        >
          How Pricing Works
        </Heading>

        <Text
          color="whiteAlpha.900"
          fontWeight="bold"
          maxW="900px"
          mx="auto"
          mb={8}
          textAlign="center"
        >
          Our pricing is based on your energy needs and system components. Key factors include:
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {[
            {
              title: "Panels & Inverters",
              description:
                "High-quality solar panels and inverters determine efficiency, lifespan, and output.",
            },
            {
              title: "Battery Storage",
              description:
                "Battery type and capacity influence how long you can store energy and stay powered during outages.",
            },
            {
              title: "Installation & Labor",
              description:
                "Professional installation ensures safety, compliance, and optimal performance of your system.",
            },
            {
              title: "Maintenance & Monitoring",
              description:
                "Routine checks, cleaning, and smart monitoring keep your system performing efficiently over the years.",
            },
            {
              title: "System Size",
              description:
                "We calculate your energy usage to avoid over-sizing or under-sizing, optimizing costs and savings.",
            },
            {
              title: "Additional Accessories",
              description:
                "Wiring, mounting structures, and surge protection are included in total cost for safety and durability.",
            },
          ].map((item, index) => (
            <MotionBox
              key={index}
              bg="whiteAlpha.100"
              backdropFilter="blur(18px)"
              rounded="2xl"
              shadow="2xl"
              p={6}
              textAlign="center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Heading fontSize="xl" color="yellow.400" mb={3}>
                {item.title}
              </Heading>
              <Text color="whiteAlpha.900" fontWeight="bold">
                {item.description}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>

      {/* ================= RESIDENTIAL, COMMERCIAL, INDUSTRIAL ================= */}
      <Box py={20} px={4} bg="blackAlpha.700">
        <Heading
          textAlign="center"
          color="yellow.400"
          mb={10}
          textShadow="1px 1px 4px black"
        >
          Pricing Ranges
        </Heading>

        <SimpleGrid maxW="1200px" mx="auto" columns={{ base: 1, md: 3 }} spacing={8}>
          <MotionBox
            bg="whiteAlpha.100"
            backdropFilter="blur(18px)"
            rounded="2xl"
            shadow="2xl"
            p={6}
            textAlign="center"
            whileHover={{ scale: 1.05 }}
          >
            <Heading color="yellow.400">₦3.5M – ₦5M</Heading>
            <Text color="white" fontWeight="bold" mt={2}>
              Residential Solar Installations (Typical 5kW system)
            </Text>
          </MotionBox>

          <MotionBox
            bg="whiteAlpha.100"
            backdropFilter="blur(18px)"
            rounded="2xl"
            shadow="2xl"
            p={6}
            textAlign="center"
            whileHover={{ scale: 1.05 }}
          >
            <Heading color="yellow.400">₦15M – ₦30M</Heading>
            <Text color="white" fontWeight="bold" mt={2}>
              Small Commercial Systems (10kW – 30kW)
            </Text>
          </MotionBox>

          <MotionBox
            bg="whiteAlpha.100"
            backdropFilter="blur(18px)"
            rounded="2xl"
            shadow="2xl"
            p={6}
            textAlign="center"
            whileHover={{ scale: 1.05 }}
          >
            <Heading color="yellow.400">₦40M+</Heading>
            <Text color="white" fontWeight="bold" mt={2}>
              Industrial & Large Commercial Installations
            </Text>
          </MotionBox>
        </SimpleGrid>
      </Box>

      {/* ================= TRUST & GUARANTEE ================= */}
      <Box py={20} px={4}>
        <Heading
          textAlign="center"
          color="yellow.400"
          mb={10}
          textShadow="1px 1px 4px black"
        >
          Why Choose Us
        </Heading>

        <SimpleGrid maxW="1200px" mx="auto" columns={{ base: 1, md: 3 }} spacing={8}>
          {[
            {
              title: "Certified Installers",
              description: "Professional and experienced engineers ensuring safety and quality.",
            },
            {
              title: "Warranties & Support",
              description: "Comprehensive warranty and maintenance support for peace of mind.",
            },
            {
              title: "Transparent Costs",
              description: "No hidden charges — full breakdown of system, installation, and maintenance.",
            },
          ].map((item, index) => (
            <MotionBox
              key={index}
              bg="whiteAlpha.100"
              backdropFilter="blur(18px)"
              rounded="2xl"
              shadow="2xl"
              p={6}
              textAlign="center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Heading fontSize="xl" color="yellow.400" mb={3}>
                {item.title}
              </Heading>
              <Text color="whiteAlpha.900" fontWeight="bold">
                {item.description}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
