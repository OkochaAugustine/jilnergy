"use client";

import { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Fade,
} from "@chakra-ui/react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("All fields are required."); // simple client-side alert
      return;
    }

    // Show success message
    setSuccess(true);

    // Clear form fields
    setForm({ name: "", email: "", message: "" });

    // Optional: hide success message after 5 seconds
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-b, #081513, #0b1d1a)"
      py={{ base: 16, md: 28 }}
      px={{ base: 4, md: 20 }}
      color="white"
    >
      <VStack spacing={8} maxW="700px" mx="auto" align="stretch">
        <Heading textAlign="center" color="yellow.400">
          Contact Us
        </Heading>
        <Text textAlign="center">
          Send us a message and we’ll get back to you as soon as possible.
        </Text>

        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              bg="orange.50"
              color="black"
              _placeholder={{ color: "orange.400" }}
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              bg="orange.50"
              color="black"
              _placeholder={{ color: "orange.400" }}
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              bg="orange.50"
              color="black"
              _placeholder={{ color: "orange.400" }}
              minH="150px"
            />

            <Button
              type="submit"
              bg="yellow.400"
              color="black"
              fontWeight="bold"
              _hover={{ bg: "yellow.300" }}
            >
              Send Message
            </Button>

            {/* Fade-in success message */}
            <Fade in={success}>
              <Text color="green.400" fontWeight="bold" textAlign="center">
                Message sent successfully!
              </Text>
            </Fade>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
}
