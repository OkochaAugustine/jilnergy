"use client";

import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHome, FaBolt, FaBatteryFull, FaTools } from "react-icons/fa";

const MotionBox = motion(Box);

export default function ResidentialPage() {
  return (
    <Box w="100%" overflowX="hidden">

      {/* ================= HERO SECTION ================= */}
      <Box
        minH={{ base: "500px", md: "800px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={4}
        position="relative"
        bgImage="url('/images/residential-hero.jpg')"
        bgSize="cover"
        bgPosition="center"
      >
        <Box position="absolute" inset={0} bg="blackAlpha.700" />

        <VStack spacing={6} zIndex={1} maxW="900px">
          <Heading
            fontSize={{ base: "2xl", md: "5xl" }}
            color="yellow.400"
            textShadow="2px 2px 14px black"
          >
            Residential Solar Power Solutions
          </Heading>

          <Text color="white" fontSize={{ base: "sm", md: "lg" }} fontWeight="bold">
            Reliable solar systems designed for homes — eliminate fuel costs,
            reduce power outages, and enjoy uninterrupted electricity.
          </Text>

          <Button
            size="lg"
            bg="yellow.400"
            color="black"
            _hover={{ bg: "yellow.300", transform: "scale(1.08)" }}
            as="a"
            href="/contact"
          >
            Get Home Solar Quote
          </Button>
        </VStack>
      </Box>

      {/* ================= CAPACITY GUIDE ================= */}
      <Box
        py={20}
        px={4}
        position="relative"
        bgImage="url('/images/capacity.jpg')"
        bgSize="cover"
        bgPosition="center"
      >
        <Box position="absolute" inset={0} bg="blackAlpha.800" />

        <Box position="relative" zIndex={1}>
          <Heading
            textAlign="center"
            color="yellow.400"
            mb={12}
            textShadow="2px 2px 10px black"
          >
            Solar Capacity Guide
          </Heading>

          <SimpleGrid maxW="1200px" mx="auto" columns={{ base: 1, md: 3 }} spacing={8}>
            {[
              {
                title: "1.5kVA – 30kVA System",
                power: "Lights, TV Set, fan, AC, Sumo, Water Heater",
                duration: "6–10 hours daily",
                cost: "₦1.8M – ₦2.5M",
              },
              {
                title: "3kVA – 5kVA System",
                power: "Lights, TV, fridge, fans, laptops, small pumping machine",
                duration: "10–16 hours daily",
                cost: "₦3.5M – ₦6M",
              },
              {
                title: "7.5kVA – 10kVA System",
                power: "Full apartment, ACs, fridge, freezer, pumping machine",
                duration: "18–24 hours daily",
                cost: "₦7M – ₦12M",
              },
            ].map((item, i) => (
              <MotionBox
                key={i}
                bg="whiteAlpha.100"
                backdropFilter="blur(18px)"
                rounded="2xl"
                shadow="2xl"
                p={6}
                whileHover={{ scale: 1.06 }}
              >
                <Heading color="yellow.400" fontSize="xl" mb={3}>
                  {item.title}
                </Heading>
                <Text color="white" fontWeight="bold">
                  <strong>Can power:</strong> {item.power}
                </Text>
                <Text color="white" fontWeight="bold" mt={2}>
                  <strong>Duration:</strong> {item.duration}
                </Text>
                <Text color="yellow.300" fontWeight="bold" mt={3}>
                  Estimated Cost: {item.cost}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* ================= HOW IT WORKS ================= */}
      <Box py={20} px={4} bg="blackAlpha.900">
        <Heading
          textAlign="center"
          color="yellow.400"
          mb={12}
          textShadow="2px 2px 10px black"
        >
          How Residential Solar Works
        </Heading>

        <SimpleGrid maxW="1100px" mx="auto" columns={{ base: 1, md: 4 }} spacing={8}>
          {[
            { icon: FaBolt, title: "Solar Panels", text: "Convert sunlight into electricity." },
            { icon: FaBatteryFull, title: "Battery Storage", text: "Stores energy for night use." },
            { icon: FaHome, title: "Inverter", text: "Supplies clean AC power to your home." },
            { icon: FaTools, title: "System Protection", text: "Prevents overload and damage." },
          ].map((step, i) => (
            <MotionBox
              key={i}
              textAlign="center"
              bg="whiteAlpha.100"
              backdropFilter="blur(18px)"
              rounded="2xl"
              shadow="2xl"
              p={6}
              whileHover={{ scale: 1.08 }}
            >
              <Icon as={step.icon} boxSize={10} color="yellow.400" mb={4} />
              <Heading fontSize="lg" color="yellow.400" mb={2}>
                {step.title}
              </Heading>
              <Text color="white" fontWeight="bold">
                {step.text}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>

      {/* ================= USAGE & MAINTENANCE ================= */}
      <Box py={20} px={4} position="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/videos/usage.mp4" type="video/mp4" />
        </video>

        <Box position="absolute" inset={0} bg="blackAlpha.800" />

        <Box position="relative" zIndex={1}>
          <Heading
            textAlign="center"
            color="yellow.400"
            mb={12}
            textShadow="2px 2px 10px black"
          >
            Proper Usage & Maintenance
          </Heading>

          <SimpleGrid maxW="1100px" mx="auto" columns={{ base: 1, md: 2 }} spacing={8}>
            <MotionBox
              bg="whiteAlpha.100"
              backdropFilter="blur(18px)"
              rounded="2xl"
              shadow="2xl"
              p={6}
            >
              <Heading color="yellow.400" mb={3}>
                Usage Best Practices
              </Heading>
              <Text color="white" fontWeight="bold">
                • Avoid heavy appliances at night<br />
                • Do not overload system<br />
                • Switch off unused appliances<br />
                • Use energy-efficient devices
              </Text>
            </MotionBox>

            <MotionBox
              bg="whiteAlpha.100"
              backdropFilter="blur(18px)"
              rounded="2xl"
              shadow="2xl"
              p={6}
            >
              <Heading color="yellow.400" mb={3}>
                Maintenance Tips
              </Heading>
              <Text color="white" fontWeight="bold">
                • Clean panels every 2–4 weeks<br />
                • Keep batteries cool<br />
                • Avoid water exposure<br />
                • Annual professional inspection
              </Text>
            </MotionBox>
          </SimpleGrid>
        </Box>
      </Box>

      {/* ================= CTA ================= */}
      <Box py={20} textAlign="center">
        <Heading color="yellow.400" mb={6}>
          Ready to Power Your Home?
        </Heading>
        <Button
          size="lg"
          bg="yellow.400"
          color="black"
          _hover={{ bg: "yellow.300", transform: "scale(1.1)" }}
          as="a"
          href="/contact"
        >
          Speak With a Solar Expert
        </Button>
      </Box>

    </Box>
  );
}
