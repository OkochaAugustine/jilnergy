"use client";

import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Button,
  Icon,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaSolarPanel,
  FaBatteryFull,
  FaBolt,
  FaTools,
  FaMoneyBillWave,
} from "react-icons/fa";

const MotionPanel = motion(AccordionPanel);

const faqs = [
  {
    q: "How long do solar panels last?",
    a: "High-quality solar panels typically last 25–30 years, with performance warranties ensuring at least 80% efficiency over their lifespan.",
    icon: FaSolarPanel,
  },
  {
    q: "How long do lithium batteries last?",
    a: "Lithium iron batteries last between 8–15 years depending on usage, depth of discharge, and maintenance practices.",
    icon: FaBatteryFull,
  },
  {
    q: "Can solar power run my house 24/7?",
    a: "Yes. With correct system sizing, battery storage, and inverter capacity, solar can power your home day and night without interruption.",
    icon: FaBolt,
  },
  {
    q: "Does solar require regular maintenance?",
    a: "Minimal maintenance is required. Periodic panel cleaning, battery health checks, and inverter inspection ensure long-term performance.",
    icon: FaTools,
  },
  {
    q: "Is solar installation expensive?",
    a: "Solar is a long-term investment. Though upfront costs exist, savings on fuel, electricity bills, and generator maintenance provide strong ROI.",
    icon: FaMoneyBillWave,
  },
];

export default function FAQPage() {
  return (
    <Box w="100%" bg="black" color="white" py={24}>
      <Container maxW="1200px">
        {/* ================= HEADER ================= */}
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading
            color="yellow.400"
            fontSize={{ base: "2xl", md: "4xl" }}
            textShadow="0 0 20px rgba(255, 200, 0, 0.5)"
          >
            Frequently Asked Questions
          </Heading>
          <Text maxW="800px" fontSize="lg" opacity={0.9}>
            Everything you need to know about solar systems, pricing, maintenance,
            and long-term performance.
          </Text>
        </VStack>

        {/* ================= FAQ ACCORDION ================= */}
        <Accordion allowToggle>
          <VStack spacing={6}>
            {faqs.map((item, index) => (
              <AccordionItem
                key={index}
                border="none"
                bg="whiteAlpha.100"
                rounded="2xl"
                overflow="hidden"
                boxShadow="0 0 25px rgba(255, 200, 0, 0.08)"
              >
                <AccordionButton
                  py={6}
                  px={6}
                  _hover={{ bg: "whiteAlpha.200" }}
                >
                  <Icon
                    as={item.icon}
                    boxSize={6}
                    color="yellow.400"
                    mr={4}
                  />

                  <Box flex="1" textAlign="left">
                    <Heading fontSize="lg">{item.q}</Heading>
                  </Box>

                  <AccordionIcon color="yellow.400" />
                </AccordionButton>

                {/* ===== ANIMATED ANSWER ===== */}
                <MotionPanel
                  px={6}
                  pb={6}
                  bg="blackAlpha.800"
                  color="yellow.500"
                  fontWeight="medium"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  textShadow="0 0 10px rgba(255, 200, 0, 0.35)"
                >
                  {item.a}
                </MotionPanel>
              </AccordionItem>
            ))}
          </VStack>
        </Accordion>

        {/* ================= CTA SECTION ================= */}
        <Box
          mt={24}
          p={16}
          textAlign="center"
          bg="linear-gradient(135deg, rgba(255,200,0,0.15), rgba(0,0,0,0.9))"
          rounded="3xl"
          boxShadow="0 0 40px rgba(255, 200, 0, 0.25)"
        >
          <Heading
            mb={4}
            color="yellow.400"
            fontSize={{ base: "2xl", md: "3xl" }}
          >
            Still Have Questions?
          </Heading>

          <Text mb={8} maxW="700px" mx="auto" opacity={0.9}>
            Speak directly with our solar experts for personalized guidance,
            system sizing, pricing, and installation planning.
          </Text>

          <Button
            size="lg"
            bg="yellow.400"
            color="black"
            fontWeight="bold"
            px={10}
            _hover={{
              bg: "yellow.300",
              transform: "scale(1.08)",
            }}
            as="a"
            href="/contact"
          >
            Talk to a Solar Expert
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
