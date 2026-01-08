"use client";

import React from "react";
import { Box, Flex, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function PricingSection() {
  const tiers = [
    {
      title: "Residential",
      price: "₦450,000",
      features: ["Solar panels for homes", "Battery backup included", "2-year maintenance"],
    },
    {
      title: "Commercial",
      price: "₦1,200,000",
      features: ["Optimized for offices & stores", "Advanced inverters & monitoring", "3-year maintenance"],
    },
    {
      title: "Industrial",
      price: "₦5,500,000",
      features: ["Large-scale solar farm solutions", "Custom energy storage", "5-year maintenance & support"],
    },
  ];

  return (
    <Box
      position="relative"
      w="100%"
      minH="100vh"
      overflow="hidden"
      bgGradient="linear(to-b, #081513, #0b1d1a)"
      px={{ base: 6, md: 20 }}
      py={{ base: 20, md: 28 }}
    >
      {/* Background Glow */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial(circle at top, rgba(255,215,0,0.1), transparent 70%)"
        filter="blur(80px)"
        zIndex={-2}
      />

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={12}
        w="full"
      >
        {/* Left Column – Pricing Info */}
        <VStack
          spacing={6}
          align={{ base: "center", md: "start" }}
          maxW="600px"
        >
          <Heading fontSize={{ base: "3xl", md: "5xl" }} color="yellow.400">
            Affordable Solar Pricing
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }} color="whiteAlpha.800">
            Tailored residential, commercial, and industrial solar solutions to fit your needs.
          </Text>

          {/* Pricing Tiers */}
          <VStack spacing={4} w="full">
            {tiers.map((tier, i) => (
              <MotionBox
                key={tier.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2, type: "spring", stiffness: 100 }}
                bg={tier.title === "Commercial" ? "yellow.400" : "whiteAlpha.900"}
                color={tier.title === "Commercial" ? "black" : "gray.900"}
                p={{ base: 4, md: 6 }}
                rounded="2xl"
                shadow="xl"
                w="full"
                textAlign="center"
                _hover={{
                  transform: "scale(1.03)",
                  shadow: "2xl",
                  transition: "all 0.3s ease",
                }}
              >
                <Heading fontSize={{ base: "xl", md: "2xl" }} mb={2}>
                  {tier.title}
                </Heading>
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={2}>
                  {tier.price}
                </Text>
                <VStack spacing={1}>
                  {tier.features.map((f, idx) => (
                    <Text key={idx} fontSize={{ base: "sm", md: "md" }}>
                      • {f}
                    </Text>
                  ))}
                </VStack>
                <Button
                  mt={4}
                  colorScheme={tier.title === "Commercial" ? "blackAlpha" : "yellow"}
                  bg={tier.title === "Commercial" ? "blackAlpha.900" : "yellow.400"}
                  color={tier.title === "Commercial" ? "white" : "black"}
                  _hover={{
                    bg: tier.title === "Commercial" ? "blackAlpha.700" : "yellow.300",
                  }}
                >
                  Choose Plan
                </Button>
              </MotionBox>
            ))}
          </VStack>
        </VStack>

        {/* Right Column – Hero-style Pricing Image */}
        <MotionBox
          flex="1"
          maxW="600px"
          aspectRatio={16 / 9}
          rounded="2xl"
          overflow="hidden"
          boxShadow="0 30px 80px rgba(0,0,0,0.6)"
          border="1px solid rgba(255,255,255,0.15)"
          initial={{ scale: 1, rotate: -0.3 }}
          animate={{ scale: [1, 1.08, 1], rotate: [0, 0.3, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Box
            w="100%"
            h="100%"
            bgImage="url('/images/pricing-hero.jpg')" // your hero-style pricing image
            bgSize="contain"
            bgPosition="center"
            bgRepeat="no-repeat"
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
            Best Value Plans
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
            Transparent & Reliable
          </Box>
        </MotionBox>
      </Flex>

      {/* Floating Info Strip */}
      <Flex
        position="absolute"
        bottom={{ base: 6, md: 10 }}
        left="50%"
        transform="translateX(-50%)"
        bg="whiteAlpha.100"
        backdropFilter="blur(10px)"
        rounded="2xl"
        px={8}
        py={4}
        gap={8}
        color="white"
      >
        <VStack spacing={1}>
          <Text fontWeight="bold" color="yellow.400">24/7</Text>
          <Text fontSize="sm">Support</Text>
        </VStack>
        <VStack spacing={1}>
          <Text fontWeight="bold" color="yellow.400">99%</Text>
          <Text fontSize="sm">Satisfaction</Text>
        </VStack>
        <VStack spacing={1}>
          <Text fontWeight="bold" color="yellow.400">100%</Text>
          <Text fontSize="sm">Clean Energy</Text>
        </VStack>
      </Flex>
    </Box>
  );
}
