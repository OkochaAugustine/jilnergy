"use client";

import { Box, Heading, Text } from "@chakra-ui/react";

export default function ServicesOverview() {
  return (
    <Box px={6} py={20} bg="white">
      <Heading size="lg" mb={4}>
        Our Solar Projects
      </Heading>
      <Text fontSize="md">
        We provide residential, commercial, and industrial solar solutions.
      </Text>
    </Box>
  );
}

