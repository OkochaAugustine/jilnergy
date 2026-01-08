"use client";

import React from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  Button,
  IconButton,
  Image,
  Text,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

/* ====== Desktop Hover Menu ====== */
function HoverMenu({ label, items }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box onMouseEnter={onOpen} onMouseLeave={onClose} position="relative">
      <Button
        variant="ghost"
        rightIcon={<FiChevronDown />}
        color="white"
        fontWeight="medium"
        _hover={{ bg: "whiteAlpha.200" }}
      >
        {label}
      </Button>

      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          bg="white"
          rounded="xl"
          shadow="2xl"
          py={3}
          minW="220px"
          zIndex={50}
          sx={{
            transformOrigin: "top",
            transform: "scale(1) translateY(0)",
            opacity: 1,
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              display="block"
              px={4}
              py={2}
              fontWeight="medium"
              _hover={{ bg: "yellow.50", color: "yellow.400" }}
            >
              {item.label}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}

/* ====== Mobile Dropdown ====== */
function MobileDropdown({ label, items }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      w="full"
      rounded="xl"
      overflow="hidden"
      border="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Flex
        justify="space-between"
        align="center"
        px={4}
        py={4}
        cursor="pointer"
        onClick={onToggle}
      >
        <Text fontSize="lg" fontWeight="bold" color="white">
          {label}
        </Text>
        <Box
          transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
          transition="0.35s cubic-bezier(0.16, 1, 0.3, 1)"
        >
          <FiChevronDown color="white" size={20} />
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <VStack align="start" spacing={4} px={5} py={5} bg="blackAlpha.700">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              color="gray.200"
              fontSize="md"
              fontWeight="medium"
              _hover={{
                color: "yellow.400",
                transform: "translateX(6px)",
                textDecoration: "none",
              }}
              transition="all 0.25s ease"
            >
              {item.label}
            </Link>
          ))}
        </VStack>
      </Collapse>
    </Box>
  );
}

/* ====== Navbar ====== */
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      bgImage="url('/images/nav-bg.jpg')"
      bgSize="cover"
      bgPosition="center"
    >
      <Box bg="blackAlpha.800" backdropFilter="blur(8px)">
        <Flex
          maxW="1400px"
          mx="auto"
          px={6}
          py={4}
          align="center"
          justify="space-between"
        >
          {/* LOGO - INCREASED SIZE */}
          <Link href="/">
            <Image
              src="/images/logo.jpg"
              alt="Jilnergy Solar"
              h={{ base: 14, md: 20 }} // Larger height for desktop
              w="auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            <Link
              href="/"
              color="white"
              fontWeight="bold"
              _hover={{ color: "yellow.400", textDecoration: "none" }}
            >
              Home
            </Link>

            <HoverMenu
              label="Solutions"
              items={[
                { label: "Residential Solar", href: "/solutions/residential" },
                { label: "Commercial Solar", href: "/solutions/commercial" },
                { label: "Industrial Solar", href: "/solutions/industrial" },
                
                
              ]}
            />

            <HoverMenu
              label="Services"
              items={[
                { label: "Installation", href: "/services/installation" },
                { label: "System Design", href: "/services/design" },
                { label: "Maintenance", href: "/services/maintenance" },
                { label: "Energy Audit", href: "/services/audit" },
                { label: "Battery Storage", href: "/services/battery" },
              ]}
            />

            <HoverMenu
              label="Resources"
              items={[
                { label: "How Solar Works", href: "/resources/how-it-works" },
                { label: "Pricing Guide", href: "/resources/pricing" },
                { label: "FAQs", href: "/resources/faqs" },
                { label: "Blog", href: "/resources/blog" },
              ]}
            />

            <Link
              href="/contact"
              color="white"
              fontWeight="bold"
              _hover={{ color: "yellow.400", textDecoration: "none" }}
            >
              Contact
            </Link>

            <Link href="/contact">
              <Button
                bg="yellow.400"
                color="black"
                fontWeight="bold"
                _hover={{ bg: "yellow.300" }}
              >
                Get a Free Quote
              </Button>
            </Link>
          </HStack>

          {/* MOBILE TOGGLE */}
          <IconButton
            display={{ md: "none" }}
            icon={isOpen ? <FiX /> : <FiMenu />}
            onClick={onToggle}
            variant="ghost"
            color="white"
            fontSize="22px"
            aria-label="Toggle menu"
          />
        </Flex>

        {/* MOBILE PANEL */}
        <Collapse in={isOpen} animateOpacity>
          <Box display={{ md: "none" }} px={6} py={8} bg="blackAlpha.900" backdropFilter="blur(14px)">
            <VStack spacing={5} align="stretch">
              <Link
                href="/"
                color="white"
                fontSize="lg"
                fontWeight="bold"
                _hover={{ color: "yellow.400", textDecoration: "none" }}
              >
                Home
              </Link>

              <MobileDropdown
                label="Solutions"
                items={[
                  { label: "Residential Solar", href: "/solutions/residential" },
                  { label: "Commercial Solar", href: "/solutions/commercial" },
                  { label: "Industrial Solar", href: "/solutions/industrial" },
                  { label: "Hybrid / Off-Grid", href: "/solutions/hybrid" },
                  { label: "Solar Water Pumps", href: "/solutions/water-pumps" },
                ]}
              />

              <MobileDropdown
                label="Services"
                items={[
                  { label: "Installation", href: "/services/installation" },
                  { label: "System Design", href: "/services/design" },
                  { label: "Maintenance", href: "/services/maintenance" },
                  { label: "Energy Audit", href: "/services/audit" },
                  { label: "Battery Storage", href: "/services/battery" },
                ]}
              />

              <MobileDropdown
                label="Resources"
                items={[
                  { label: "How Solar Works", href: "/resources/how-it-works" },
                  { label: "Pricing Guide", href: "/resources/pricing" },
                  { label: "FAQs", href: "/resources/faqs" },
                  { label: "Blog", href: "/resources/blog" },
                ]}
              />

              <Link
                href="/contact"
                color="white"
                fontSize="lg"
                fontWeight="bold"
                _hover={{ color: "yellow.400", textDecoration: "none" }}
              >
                Contact
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  bg="yellow.400"
                  color="black"
                  fontWeight="bold"
                  mt={4}
                  _hover={{ bg: "yellow.300" }}
                >
                  Get a Free Quote
                </Button>
              </Link>
            </VStack>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}
