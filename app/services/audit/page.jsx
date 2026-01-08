"use client";

import { Box, VStack, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function EnergyAuditPage() {
  const steps = [
    {
      title: "Step 1: Calculate Daily Energy Usage",
      description:
        "Determine your household or business's daily electricity consumption in kilowatt-hours (kWh). Include lighting, appliances, HVAC, and other devices.",
      example: "Example: 10 lights x 60W x 5 hours + fridge 150W x 24 hours = 12 kWh/day",
    },
    {
      title: "Step 2: Decide Autonomy Days",
      description:
        "Autonomy is how many days your system should supply power without sunlight. Residential systems often use 1-2 days, commercial may require 3-5 days.",
    },
    {
      title: "Step 3: Choose Battery Capacity",
      description:
        "Battery storage should cover your autonomy days. Formula: Battery (kWh) = Daily usage (kWh) x Days of autonomy / Depth of discharge (DoD)",
      example: "Example: 12 kWh/day x 2 days ÷ 0.8 DoD = 30 kWh battery",
    },
    {
      title: "Step 4: Determine Solar Panel Capacity",
      description:
        "Calculate the solar panel array size needed to generate your daily kWh based on peak sun hours.",
      example:
        "Example: 12 kWh/day ÷ 5 peak sun hours = 2.4 kW system → about 4 panels of 600W each",
    },
    {
      title: "Step 5: Select Inverter Size",
      description:
        "Inverter must handle your peak load. Sum up all appliances that may run simultaneously and add 20-30% safety margin.",
    },
    {
      title: "Step 6: Perform Audit & Verification",
      description:
        "After sizing, verify calculations and ensure balance between generation, storage, and consumption to avoid oversizing or undersizing.",
    },
  ];

  return (
    <Box w="100%" overflowX="hidden" bg="gray.900" color="white" minH="100vh">
      {/* ================= HERO SECTION ================= */}
      <Box
        minH={{ base: "400px", md: "700px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={4}
        position="relative"
        bgImage="url('/images/residential-hero.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box position="absolute" inset={0} bg="blackAlpha.600" />
        <VStack spacing={6} zIndex={1} maxW="900px">
          <Heading
            fontSize={{ base: "2xl", md: "5xl" }}
            color="yellow.400"
            textShadow="2px 2px 14px black"
          >
            Residential Solar Energy Audit
          </Heading>
          <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="bold" color="white">
            Learn how to properly calculate your energy consumption and size your solar system to achieve optimal performance and long-term savings.
          </Text>
        </VStack>
      </Box>

      {/* ================= STEPS SECTION ================= */}
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} py={20}>
        <Heading
          textAlign="center"
          color="yellow.400"
          mb={14}
          textShadow="2px 2px 10px black"
        >
          How an Energy Audit Works
        </Heading>

        <VStack spacing={10}>
          {steps.map((step, index) => (
            <MotionBox
              key={index}
              bg="whiteAlpha.100"
              backdropFilter="blur(14px)"
              rounded="2xl"
              shadow="2xl"
              p={6}
              w="100%"
              whileHover={{ scale: 1.03 }}
            >
              <Heading fontSize="xl" color="yellow.400" mb={3}>
                {step.title}
              </Heading>
              <Text fontSize="md" color="whiteAlpha.900" fontWeight="bold" mb={2}>
                {step.description}
              </Text>
              {step.example && (
                <Text fontSize="sm" color="yellow.200" fontStyle="italic">
                  {step.example}
                </Text>
              )}
            </MotionBox>
          ))}
        </VStack>
      </Box>

      {/* ================= CAPACITY GUIDE ================= */}
      <Box
        py={20}
        position="relative"
        bgImage="url('/images/capacity.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box position="absolute" inset={0} bg="blackAlpha.700" />
        <Box maxW="1100px" mx="auto" px={4} position="relative" zIndex={1}>
          <Heading
            textAlign="center"
            color="yellow.400"
            mb={12}
            textShadow="2px 2px 10px black"
          >
            Solar Capacity Guide
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <MotionBox
              bg="whiteAlpha.100"
              backdropFilter="blur(14px)"
              rounded="2xl"
              shadow="2xl"
              p={6}
              textAlign="center"
              whileHover={{ scale: 1.05 }}
            >
              <Heading color="yellow.400">1 kW System</Heading>
              <Text color="whiteAlpha.900" fontWeight="bold" mt={2}>
                Powers a small room, LED lights, and fan for 24 hours
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
            >
              <Heading color="yellow.400">3 kW System</Heading>
              <Text color="whiteAlpha.900" fontWeight="bold" mt={2}>
                Powers an average 2-bedroom home including lights, fan, TV, and fridge for 24 hours
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
            >
              <Heading color="yellow.400">5 kW System</Heading>
              <Text color="whiteAlpha.900" fontWeight="bold" mt={2}>
                Powers 3-4 bedrooms, appliances, fridge, and entertainment systems for 24 hours
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
            >
              <Heading color="yellow.400">10 kW System</Heading>
              <Text color="whiteAlpha.900" fontWeight="bold" mt={2}>
                Powers large homes with multiple appliances and 24-hour backup
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
            >
              <Heading color="yellow.400">15 kW System</Heading>
              <Text color="whiteAlpha.900" fontWeight="bold" mt={2}>
                Powers very large homes with ACs, appliances, and continuous backup
              </Text>
            </MotionBox>
          </SimpleGrid>
        </Box>
      </Box>

      {/* ================= USAGE & MAINTENANCE ================= */}
      <Box
        minH={{ base: "400px", md: "600px" }}
        position="relative"
      >
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
            opacity: 0.35,
            zIndex: 0,
          }}
        >
          <source src="/videos/useage.mp4" type="video/mp4" />
        </video>
        <Box position="absolute" inset={0} bg="blackAlpha.700" />
        <VStack
          spacing={6}
          position="relative"
          zIndex={1}
          px={4}
          maxW="900px"
          mx="auto"
          textAlign="center"
        >
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            color="yellow.400"
            textShadow="2px 2px 10px black"
          >
            Proper Usage & Maintenance (Very Important)
          </Heading>
          <Text fontSize={{ base: "sm", md: "lg" }} color="white" fontWeight="bold">
            Learn the correct handling, cleaning, and maintenance of solar panels and batteries to ensure maximum lifespan and efficiency. Regular inspections and preventive maintenance reduce downtime and improve your ROI.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
