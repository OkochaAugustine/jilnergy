"use client";

import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  MdSolarPower,
  MdBatteryChargingFull,
  MdEngineering,
  MdWarning,
  MdCheckCircle,
} from "react-icons/md";

const MotionBox = motion(Box);

export default function MaintenancePage() {
  return (
    <Box w="100%" overflowX="hidden" bg="black">

      {/* ================= HERO SECTION ================= */}
      <Box
        minH={{ base: "480px", md: "750px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={4}
        position="relative"
        bgImage="url('/images/maintenance-hero.jpg')"
        bgSize="cover"
        bgPosition="center"
      >
        <Box position="absolute" inset={0} bg="blackAlpha.800" />

        <VStack spacing={6} zIndex={1} maxW="900px">
          <Heading
            fontSize={{ base: "2xl", md: "5xl" }}
            color="yellow.400"
            textShadow="2px 2px 14px black"
          >
            Solar System Maintenance & Longevity
          </Heading>

          <Text color="white" fontSize={{ base: "sm", md: "lg" }} fontWeight="bold">
            Proper maintenance is the difference between a solar system that lasts
            5 years and one that performs efficiently for 20+ years.
          </Text>

          <Button
            size="lg"
            bg="yellow.400"
            color="black"
            _hover={{ bg: "yellow.300", transform: "scale(1.08)" }}
            as="a"
            href="/contact"
          >
            Book Maintenance Inspection
          </Button>
        </VStack>
      </Box>

      {/* ================= WHY MAINTENANCE MATTERS ================= */}
      <Box py={20} px={4}>
        <Heading
          textAlign="center"
          color="yellow.400"
          mb={10}
          textShadow="2px 2px 10px black"
        >
          Why Solar Maintenance Is Critical (Especially in Nigeria)
        </Heading>

        <SimpleGrid maxW="1100px" mx="auto" columns={{ base: 1, md: 3 }} spacing={8}>
          {[
            {
              icon: MdWarning,
              title: "Dust & Harmattan",
              text: "Dust buildup can reduce panel output by up to 40% if not cleaned regularly.",
            },
            {
              icon: MdEngineering,
              title: "Heat & Overload",
              text: "High temperatures and wrong load usage reduce inverter and battery lifespan.",
            },
            {
              icon: MdCheckCircle,
              title: "Prevent Costly Failures",
              text: "Routine checks prevent inverter burn, battery damage, and wiring faults.",
            },
          ].map((item, i) => (
            <MotionBox
              key={i}
              bg="whiteAlpha.100"
              backdropFilter="blur(18px)"
              rounded="2xl"
              shadow="2xl"
              p={6}
              textAlign="center"
              whileHover={{ scale: 1.07 }}
            >
              <Icon as={item.icon} boxSize={12} color="yellow.400" mb={4} />
              <Heading fontSize="xl" color="yellow.400" mb={3}>
                {item.title}
              </Heading>
              <Text color="white" fontWeight="bold">
                {item.text}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>

      {/* ================= PANEL MAINTENANCE ================= */}
      <Box py={20} px={4} bg="gray.900">
        <Heading textAlign="center" color="yellow.400" mb={12}>
          Solar Panel Maintenance Guide
        </Heading>

        <SimpleGrid maxW="1100px" mx="auto" columns={{ base: 1, md: 2 }} spacing={10}>
          <MotionBox
            bg="whiteAlpha.100"
            rounded="2xl"
            p={6}
            shadow="2xl"
          >
            <Heading color="yellow.400" mb={4}>
              What To Do
            </Heading>
            <Text color="white" fontWeight="bold">
              ✔ Clean panels every 2–4 weeks  
              <br />✔ Use clean water & soft cloth  
              <br />✔ Inspect mounting bolts & frames  
              <br />✔ Check shading from trees/buildings  
              <br />✔ Ensure proper airflow behind panels
            </Text>
          </MotionBox>

          <MotionBox
            bg="whiteAlpha.100"
            rounded="2xl"
            p={6}
            shadow="2xl"
          >
            <Heading color="red.400" mb={4}>
              What To Avoid
            </Heading>
            <Text color="white" fontWeight="bold">
              ✖ Using detergents or chemicals  
              <br />✖ Walking on panels  
              <br />✖ High-pressure water  
              <br />✖ Ignoring cracked glass  
              <br />✖ Leaving panels dirty for months
            </Text>
          </MotionBox>
        </SimpleGrid>
      </Box>

      {/* ================= BATTERY MAINTENANCE ================= */}
      <Box py={20} px={4}>
        <Heading textAlign="center" color="yellow.400" mb={12}>
          Battery Maintenance (Lithium & Tubular)
        </Heading>

        <SimpleGrid maxW="1100px" mx="auto" columns={{ base: 1, md: 3 }} spacing={8}>
          {[
            {
              icon: MdBatteryChargingFull,
              title: "Proper Charging",
              text: "Avoid deep discharge. Do not drain batteries below recommended levels.",
            },
            {
              icon: MdSolarPower,
              title: "Correct Load Usage",
              text: "Do not overload the system beyond inverter capacity.",
            },
            {
              icon: MdEngineering,
              title: "Ventilation & Cooling",
              text: "Batteries must be installed in cool, well-ventilated areas.",
            },
          ].map((item, i) => (
            <MotionBox
              key={i}
              bg="whiteAlpha.100"
              backdropFilter="blur(18px)"
              rounded="2xl"
              shadow="2xl"
              p={6}
              textAlign="center"
              whileHover={{ scale: 1.07 }}
            >
              <Icon as={item.icon} boxSize={12} color="yellow.400" mb={4} />
              <Heading fontSize="lg" color="yellow.400" mb={3}>
                {item.title}
              </Heading>
              <Text color="white" fontWeight="bold">
                {item.text}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>

      {/* ================= COMMERCIAL & INDUSTRIAL ================= */}
      <Box py={20} px={4} bg="gray.900">
        <Heading textAlign="center" color="yellow.400" mb={12}>
          Commercial & Industrial Maintenance Best Practices
        </Heading>

        <SimpleGrid maxW="1100px" mx="auto" columns={{ base: 1, md: 2 }} spacing={10}>
          <MotionBox bg="whiteAlpha.100" rounded="2xl" p={6} shadow="2xl">
            <Heading color="yellow.400" mb={4}>
              Scheduled Preventive Maintenance
            </Heading>
            <Text color="white" fontWeight="bold">
              • Monthly system inspection  
              <br />• Thermal scanning of cables  
              <br />• Inverter firmware updates  
              <br />• Battery health reports  
              <br />• Performance data analysis
            </Text>
          </MotionBox>

          <MotionBox bg="whiteAlpha.100" rounded="2xl" p={6} shadow="2xl">
            <Heading color="yellow.400" mb={4}>
              Professional Servicing
            </Heading>
            <Text color="white" fontWeight="bold">
              Large systems require certified engineers to prevent production loss,
              downtime, and expensive component damage.
            </Text>
          </MotionBox>
        </SimpleGrid>
      </Box>

      {/* ================= CTA ================= */}
      <Box py={24} textAlign="center">
        <Heading color="yellow.400" mb={6}>
          Protect Your Investment
        </Heading>
        <Text color="white" fontWeight="bold" mb={8}>
          Regular maintenance saves millions in replacement costs and ensures
          uninterrupted power.
        </Text>
        <Button
          size="lg"
          bg="yellow.400"
          color="black"
          _hover={{ bg: "yellow.300", transform: "scale(1.1)" }}
          as="a"
          href="/contact"
        >
          Schedule Maintenance Service
        </Button>
      </Box>

    </Box>
  );
}
