// WhatsAppFloater component 
"use client";

import { Box, IconButton } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloater() {
  return (
    <Box position="fixed" bottom="20px" right="20px" zIndex={1000}>
      <IconButton
        icon={<FaWhatsapp />}
        colorScheme="whatsapp"
        size="lg"
        isRound
        aria-label="Chat on WhatsApp"
        onClick={() =>
          window.open("https://wa.me/+2349066222494", "_blank")
        }
      />
    </Box>
  );
}
