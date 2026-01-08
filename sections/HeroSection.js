"use client";

import { Box, Flex, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function HeroSection() {
  return (
    <Box
      position="relative"
      w="100%"
      minH="100vh"
      overflow="hidden"
      bgImage="url('/images/nav-bg2.jpg')" // MAIN HERO BACKGROUND
      bgSize="cover"
      bgPosition="center"
    >
      {/* BACKGROUND OVERLAY / AMBIENCE */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-b, rgba(0,0,0,0.6), rgba(0,0,0,0.5))" // dark overlay to make text readable
        zIndex={1}
      />

      {/* MAIN CONTENT */}
      <Flex
        position="relative"
        zIndex={2}
        w="100%"
        minH="100vh"
        px={{ base: 4, md: 20 }}
        py={{ base: 20, md: 28 }}
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        gap={12}
      >
        {/* LEFT TEXT */}
        <VStack align="start" spacing={6} maxW="520px">
          <Text color="yellow.400" fontWeight="bold" letterSpacing="wider">
            SOLAR ENERGY SOLUTIONS
          </Text>

          <Heading fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.1" color="white">
            Power Your Future  
            <Text as="span" color="yellow.400"> With The Sun</Text>
          </Heading>

          <Text color="whiteAlpha.800" fontSize="lg">
            Clean, reliable solar systems designed for homes and businesses.
            Built for efficiency. Designed for Nigeria.
          </Text>

          <HStack spacing={4} pt={4}>
            <Button
              bg="yellow.400"
              color="black"
              _hover={{ bg: "yellow.300" }}
              as="a"
              href="/solutions/commercial"
            >
              Our Services
            </Button>
            <Button
              variant="outline"
              color="white"
              borderColor="whiteAlpha.400"
              _hover={{ bg: "whiteAlpha.200" }}
              as="a"
              href="/services/installation"
            >
              View Projects
            </Button>
          </HStack>
        </VStack>

        {/* RIGHT IMAGE – TV STYLE */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          position="relative"
          w={{ base: "100%", md: "55%" }}
          maxW="780px"
          aspectRatio={16 / 9}
          rounded="2xl"
          overflow="hidden"
          boxShadow="0 30px 80px rgba(0,0,0,0.6)"
          border="1px solid rgba(255,255,255,0.15)"
          bg="black"
        >
          {/* IMAGE */}
          <Box
            w="100%"
            h="100%"
            bgImage="url('/images/hero-sec.jpg')"
            bgSize="cover"
            bgPosition="center"
          />

          {/* SCREEN GLOW */}
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, rgba(0,0,0,0.6), rgba(0,0,0,0))"
          />

          {/* TOP OVERLAY */}
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
            Smart Solar Panels
          </Box>

          {/* BOTTOM OVERLAY */}
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
            Clean • Reliable • Efficient
          </Box>
        </MotionBox>
      </Flex>

      {/* BOTTOM FLOATING INFO STRIP */}
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
        zIndex={2}
      >
        <VStack spacing={1}>
          <Text fontWeight="bold" color="yellow.400">24/7</Text>
          <Text fontSize="sm">Power Supply</Text>
        </VStack>
        <VStack spacing={1}>
          <Text fontWeight="bold" color="yellow.400">10+</Text>
          <Text fontSize="sm">Years Experience</Text>
        </VStack>
        <VStack spacing={1}>
          <Text fontWeight="bold" color="yellow.400">100%</Text>
          <Text fontSize="sm">Clean Energy</Text>
        </VStack>
      </Flex>
    </Box>
  );
}
