"use client";

import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Loading() {
  return (
    <Box
      position="fixed"
      inset="0"
      zIndex="9999"
      bg="linear-gradient(135deg, #050b0a, #081513, #0b1d1a)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={6}>
        {/* Animated Energy Core */}
        <MotionBox
          w="90px"
          h="90px"
          borderRadius="50%"
          border="3px solid rgba(255, 214, 10, 0.3)"
          boxShadow="0 0 40px rgba(255, 214, 10, 0.6)"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Smart Text */}
        <MotionBox
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <Text
            fontSize="sm"
            letterSpacing="0.3em"
            color="yellow.400"
            fontWeight="bold"
          >
            LOADING EXPERIENCE
          </Text>
        </MotionBox>
      </VStack>
    </Box>
  );
}
