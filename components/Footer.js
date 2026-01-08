"use client";

import {
  Box,
  Grid,
  VStack,
  HStack,
  Text,
  Link,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFacebookF, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const MotionBox = motion(Box);

export default function Footer() {
  return (
    <Box
      as="footer"
      position="relative"
      width="100vw"
      overflow="hidden"
      color="white"
    >
      {/* ===== Background Image ===== */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage="url('/images/footer.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        zIndex={0}
      />

      {/* ===== Dark Overlay ===== */}
      <Box
        position="absolute"
        inset={0}
        bg="blackAlpha.800"
        zIndex={1}
      />

      {/* ===== Footer Content ===== */}
      <MotionBox
        position="relative"
        zIndex={2}
        px={{ base: 6, md: 20 }}
        py={{ base: 16, md: 24 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "2fr 1fr 1fr" }}
          gap={12}
        >
          {/* ===== Brand / About ===== */}
          <VStack align="start" spacing={4}>
            <Text fontSize="2xl" fontWeight="bold" color="yellow.400">
              Jilnergy Solar
            </Text>
            <Text fontSize="sm" color="gray.300" maxW="420px">
              Powering homes and businesses with clean, reliable, and
              sustainable solar energy solutions across Nigeria.
            </Text>

            {/* Social */}
            <HStack spacing={4} pt={2}>
              <Link
                href="https://facebook.com"
                isExternal
                aria-label="Facebook"
              >
                <Icon
                  as={FaFacebookF}
                  boxSize={5}
                  _hover={{ color: "yellow.400", transform: "scale(1.1)" }}
                  transition="0.3s"
                />
              </Link>
            </HStack>
          </VStack>

          {/* ===== Quick Links ===== */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="bold" mb={2}>
              Quick Links
            </Text>
            <Link href="/" _hover={{ color: "yellow.400" }}>
              Home
            </Link>
            <Link href="/services/installation" _hover={{ color: "yellow.400" }}>
              Installation
            </Link>
            <Link href="/resources/how-it-works" _hover={{ color: "yellow.400" }}>
              How Solar Works
            </Link>
            <Link href="/contact" _hover={{ color: "yellow.400" }}>
              Contact
            </Link>
          </VStack>

          {/* ===== Contact Info ===== */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="bold" mb={2}>
              Contact Us
            </Text>

            <HStack>
              <Icon as={FaPhoneAlt} />
              <Text fontSize="sm">+234 XXX XXX XXXX</Text>
            </HStack>

            <HStack>
              <Icon as={FaEnvelope} />
              <Text fontSize="sm">okochaaugustine158@gmail.com</Text>
            </HStack>
          </VStack>
        </Grid>

        <Divider my={10} borderColor="whiteAlpha.300" />

        {/* ===== Bottom Bar ===== */}
        <Text textAlign="center" fontSize="sm" color="gray.400">
          © {new Date().getFullYear()} Jilnergy Solar. All rights reserved.
        </Text>
      </MotionBox>
    </Box>
  );
}
