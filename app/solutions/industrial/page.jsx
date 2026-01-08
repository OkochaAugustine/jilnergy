"use client";

import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Divider,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function IndustrialPage() {
  return (
    <Box w="100%" overflowX="hidden" bg="black">

      {/* ================= HERO (VIDEO BACKGROUND) ================= */}
      <Box
        position="relative"
        minH={{ base: "550px", md: "850px" }}
        w="100%"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Video Background */}
        <Box
          as="video"
          autoPlay
          muted
          loop
          playsInline
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          minW="100%"
          minH="100%"
          w="auto"
          h="auto"
          objectFit="cover"
          zIndex={0}
        >
          <source src="/videos/industrial.mp4" type="video/mp4" />
        </Box>

        {/* Dark Overlay */}
        <Box
          position="absolute"
          inset={0}
          bg="blackAlpha.700"
          zIndex={1}
        />

        {/* Hero Content */}
        <VStack
          zIndex={2}
          spacing={6}
          px={6}
          maxW="1100px"
          textAlign="center"
        >
          <Heading
            fontSize={{ base: "2xl", md: "5xl" }}
            color="yellow.400"
            textShadow="2px 2px 20px black"
          >
            Industrial Solar Power Systems
          </Heading>

          <Text
            color="gray.200"
            fontSize={{ base: "sm", md: "lg" }}
            fontWeight="bold"
          >
            High-capacity solar solutions engineered for factories, production
            plants, hotels, farms, warehouses, and heavy-load industrial
            operations.
          </Text>

          <Button
            size="lg"
            bg="yellow.400"
            color="black"
            _hover={{ bg: "yellow.300", transform: "scale(1.08)" }}
            as="a"
            href="/contact"
          >
            Request Industrial Proposal
          </Button>
        </VStack>
      </Box>

      {/* ================= BASE SYSTEM ================= */}
      <Box py={20} px={6} bg="gray.900">
        <Heading textAlign="center" color="yellow.400" mb={12}>
          Standard 10kVA Industrial Solar System
        </Heading>

        <SimpleGrid
          maxW="1200px"
          mx="auto"
          columns={{ base: 1, md: 2 }}
          spacing={10}
        >
          <MotionBox
            bg="whiteAlpha.100"
            rounded="2xl"
            p={8}
            shadow="2xl"
            whileHover={{ scale: 1.04 }}
          >
            <Heading fontSize="xl" color="yellow.400" mb={4}>
              System Components
            </Heading>

            <Text color="gray.200">• 10kVA 48V Felicity Inverter</Text>
            <Text color="gray.200">• 10kWh Felicity Lithium Iron Battery</Text>
            <Text color="gray.200">• 120A Felicity Charge Controller</Text>
            <Text color="gray.200">• 15 × 600W Half-Cut Solar Panels</Text>
            <Text color="gray.200">
              • Industrial accessories, protection & cabling
            </Text>

            <Divider my={4} />

            <Badge colorScheme="yellow" fontSize="md">
              Base Industrial Configuration
            </Badge>
          </MotionBox>

          <MotionBox
            bg="whiteAlpha.100"
            rounded="2xl"
            p={8}
            shadow="2xl"
            whileHover={{ scale: 1.04 }}
          >
            <Heading fontSize="xl" color="yellow.400" mb={4}>
              Performance Capacity
            </Heading>

            <Text color="gray.200">
              • Supports heavy machinery & motors
            </Text>
            <Text color="gray.200">
              • Long operational hours per day
            </Text>
            <Text color="gray.200">
              • Ideal for factories, cold rooms & hotels
            </Text>
            <Text color="gray.200">
              • Massive fuel & generator cost savings
            </Text>

            <Divider my={4} />

            <Heading color="yellow.300">₦8,000,000</Heading>
            <Text color="gray.400" fontSize="sm">
              Complete installed system
            </Text>
          </MotionBox>
        </SimpleGrid>
      </Box>

      {/* ================= EXPANSION ================= */}
      <Box py={20} px={6} bg="black">
        <Heading textAlign="center" color="yellow.400" mb={12}>
          Battery Expansion & Scaling
        </Heading>

        <SimpleGrid
          maxW="1200px"
          mx="auto"
          columns={{ base: 1, md: 3 }}
          spacing={8}
        >
          {[
            { title: "20kWh Expansion", price: "+ ₦500,000" },
            { title: "25kWh Expansion", price: "+ ₦1,000,000" },
            { title: "30kWh Expansion", price: "+ ₦1,500,000" },
          ].map((item, i) => (
            <MotionBox
              key={i}
              bg="whiteAlpha.100"
              p={6}
              rounded="2xl"
              shadow="xl"
              whileHover={{ scale: 1.06 }}
            >
              <Heading fontSize="lg" color="yellow.400" mb={3}>
                {item.title}
              </Heading>
              <Text color="gray.200">
                Increased runtime for uninterrupted industrial operations.
              </Text>
              <Text mt={3} color="yellow.300" fontWeight="bold">
                {item.price}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>

        <Text mt={8} textAlign="center" color="gray.400" fontSize="sm">
          Additional ₦500,000 applies per extra 10kWh battery fraction.
        </Text>
      </Box>

      {/* ================= PREMIUM ================= */}
      <Box py={20} px={6} bg="gray.900">
        <Heading textAlign="center" color="yellow.400" mb={12}>
          Premium Industrial Packages
        </Heading>

        <SimpleGrid
          maxW="1200px"
          mx="auto"
          columns={{ base: 1, md: 2 }}
          spacing={10}
        >
          <MotionBox bg="whiteAlpha.100" p={8} rounded="2xl" shadow="2xl">
            <Heading color="yellow.400">30kWh Industrial System</Heading>
            <Divider my={3} />
            <Text color="gray.200">10kVA Felicity Inverter</Text>
            <Text color="gray.200">30kWh Lithium Iron Battery Bank</Text>
            <Heading mt={4} color="yellow.300">
              ₦13,000,000
            </Heading>
          </MotionBox>

          <MotionBox bg="whiteAlpha.100" p={8} rounded="2xl" shadow="2xl">
            <Heading color="yellow.400">Enterprise Deployment</Heading>
            <Divider my={3} />
            <Text color="gray.200">
              Designed for large factories & continuous production environments.
            </Text>
            <Heading mt={4} color="yellow.300">
              ₦15,000,000
            </Heading>
          </MotionBox>
        </SimpleGrid>
      </Box>

      {/* ================= CTA ================= */}
      <Box py={20} textAlign="center" bg="black">
        <Heading color="yellow.400" mb={6}>
          Industrial Power Without Fuel Dependency
        </Heading>

        <Button
          size="lg"
          bg="yellow.400"
          color="black"
          _hover={{ bg: "yellow.300", transform: "scale(1.1)" }}
          as="a"
          href="/contact"
        >
          Speak With Our Engineers
        </Button>
      </Box>
    </Box>
  );
}
