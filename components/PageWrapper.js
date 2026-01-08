"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";

export default function PageWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={children?.key || "page"}
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: 90, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <Box minH="80vh" px={6} py={12}>
          {children}
        </Box>
      </motion.div>
    </AnimatePresence>
  );
}
