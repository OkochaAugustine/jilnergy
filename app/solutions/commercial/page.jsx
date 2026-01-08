"use client";

import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function CommercialPage() {
  return (
    <Box w="100%" overflowX="hidden">

      {/* ================= HERO SECTION ================= */}
      <Box
        minH={{ base: "450px", md: "750px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={4}
        position="relative"
        bgImage="url('/images/com-hero.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box position="absolute" inset={0} bg="blackAlpha.700" />

        <VStack spacing={6} zIndex={1} maxW="900px">
          <Heading
            fontSize={{ base: "2xl", md: "5xl" }}
            color="yellow.400"
            textShadow="2px 2px 14px black"
          >
            Commercial Solar Power Systems
          </Heading>

          <Text fontSize={{ base: "sm", md: "lg" }} color="white" fontWeight="bold">
            Power your business with high-capacity solar systems engineered to
            reduce operational costs, increase energy independence, and deliver
            long-term ROI.
          </Text>

          <Button
            size="lg"
            bg="yellow.400"
            color="black"
            _hover={{ bg: "yellow.300", transform: "scale(1.08)" }}
            as="a"
            href="/contact"
          >
            Request Commercial Quote
          </Button>
        </VStack>
      </Box>

      {/* ================= PROCESS SECTION ================= */}
      <Box
        py={20}
        position="relative"
        bgImage="url('/images/com-bg.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box position="absolute" inset={0} bg="blackAlpha.800" />

        <Box maxW="1200px" mx="auto" px={4} position="relative" zIndex={1}>
          <Heading
            textAlign="center"
            color="yellow.400"
            mb={14}
            textShadow="2px 2px 10px black"
          >
            Commercial Solar Installation Process
          </Heading>

          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>

            {/* ===== ENERGY AUDIT ===== */}
            <MotionBox
              bg="whiteAlpha.100"
              backdropFilter="blur(18px)"
              rounded="2xl"
              shadow="2xl"
              p={6}
              textAlign="center"
              whileHover={{ scale: 1.08 }}
              animate={{
                boxShadow: [
                  "0 0 0px #FFD700",
                  "0 0 25px #FFD700",
                  "0 0 0px #FFD700",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Heading fontSize="lg" color="yellow.400" mb={3}>
                Energy Audit
              </Heading>
              <Text color="white" fontWeight="bold">
                Detailed analysis of power demand, load profile, and operational
                consumption to determine optimal solar capacity.
              </Text>
            </MotionBox>

            {/* ===== SYSTEM DESIGN (UPDATED IMAGE) ===== */}
            <MotionBox
              bg="whiteAlpha.100"
              backdropFilter="blur(18px)"
              rounded="2xl"
              shadow="2xl"
              overflow="hidden"
              whileHover={{ scale: 1.06 }}
            >
              <Image
                src="/images/commercial-audit.jpg"
                alt="System Design"
                h="180px"
                w="100%"
                objectFit="cover"
              />
              <VStack p={4}>
                <Heading fontSize="lg" color="yellow.400">
                  System Design
                </Heading>
                <Text color="white" fontWeight="bold" textAlign="center">
                  Custom-engineered solar layouts optimized for efficiency,
                  compliance, and maximum return on investment.
                </Text>
              </VStack>
            </MotionBox>

            {/* ===== INSTALLATION ===== */}
            <MotionBox
              bg="whiteAlpha.100"
              backdropFilter="blur(18px)"
              rounded="2xl"
              shadow="2xl"
              overflow="hidden"
              whileHover={{ scale: 1.06 }}
            >
              <Image
                src="/images/commercial-install.jpg"
                alt="Commercial Installation"
                h="180px"
                w="100%"
                objectFit="cover"
              />
              <VStack p={4}>
                <Heading fontSize="lg" color="yellow.400">
                  Installation
                </Heading>
                <Text color="white" fontWeight="bold" textAlign="center">
                  Rapid, professional installation with minimal disruption to
                  business operations.
                </Text>
              </VStack>
            </MotionBox>

            {/* ===== INSPECTION & TESTING ===== */}
            <MotionBox
              bg="whiteAlpha.100"
              backdropFilter="blur(18px)"
              rounded="2xl"
              shadow="2xl"
              p={6}
              textAlign="center"
              whileHover={{ scale: 1.08 }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Heading fontSize="lg" color="yellow.400" mb={3}>
                Inspection & Testing
              </Heading>
              <Text color="white" fontWeight="bold">
                Final commissioning, safety verification, monitoring setup, and
                grid synchronization to ensure flawless operation.
              </Text>
            </MotionBox>

          </SimpleGrid>
        </Box>
      </Box>

      {/* ================= COST SECTION ================= */}
      <Box py={20} px={4}>
        <Heading
          textAlign="center"
          color="yellow.400"
          mb={10}
          textShadow="2px 2px 10px black"
        >
          Commercial Solar Installation Costs
        </Heading>

        <SimpleGrid maxW="1100px" mx="auto" columns={{ base: 1, md: 3 }} spacing={8}>
          <MotionBox
            bg="whiteAlpha.100"
            backdropFilter="blur(18px)"
            rounded="2xl"
            shadow="2xl"
            p={6}
            textAlign="center"
            whileHover={{ scale: 1.07 }}
          >
            <Heading color="yellow.400">₦15M – ₦30M</Heading>
            <Text color="white" fontWeight="bold">
              Small commercial systems (10kW – 30kW)
            </Text>
          </MotionBox>

          <MotionBox
            bg="whiteAlpha.100"
            backdropFilter="blur(18px)"
            rounded="2xl"
            shadow="2xl"
            p={6}
            textAlign="center"
            whileHover={{ scale: 1.07 }}
          >
            <Heading color="yellow.400">₦40M – ₦80M</Heading>
            <Text color="white" fontWeight="bold">
              Medium-scale businesses & factories
            </Text>
          </MotionBox>

          <MotionBox
            bg="whiteAlpha.100"
            backdropFilter="blur(18px)"
            rounded="2xl"
            shadow="2xl"
            p={6}
            textAlign="center"
            whileHover={{ scale: 1.07 }}
          >
            <Heading color="yellow.400">₦100M+</Heading>
            <Text color="white" fontWeight="bold">
              Industrial & large commercial installations
            </Text>
          </MotionBox>
        </SimpleGrid>
      </Box>

    </Box>
  );
}
