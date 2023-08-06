import HeroText from "@/components/Text/LandingPage/HeroText";
import Feature from "@/components/layout/Feature";
import Footer from "@/components/layout/Footer";
import Stories from "@/components/layout/Stories";
import Testimonials from "@/components/layout/Testimonials";
import {
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";

/**
 * Represents the landing page of the iLaundry website.
 *
 * @returns {JSX.Element} The rendered JSX element representing the landing page.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>iLaundry</title>
      </Head>
      <div className="w-full">
        {/* Hero section */}
        <div className="background mt-0">
          <div className="ml-8 pt-4 absolute">
            <div className="flex flex-row gap-2">
              <div className="flex flex-col gap-0 justify-center ">
                <h3 className="t text-xl font-bold leading-3 text-white">
                  iLaundry
                </h3>
                <p className="t text-sm text-white">powered by FTS</p>
              </div>
            </div>
          </div>
          {/* base display */}
          <Box
            display={{ base: "block", md: "none" }}
            paddingTop="120"
            minH="100vh"
          >
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="8"
            >
              {/* Hero image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Image
                  src="/images/example.svg"
                  width={{ base: 300, md: 600 }}
                  justifyContent="center"
                  alt="example-ilaundry"
                />
              </motion.div>

              {/* Hero text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="text-center">
                  <HeroText />
                </div>
              </motion.div>
            </Flex>
          </Box>
          {/* Desktop display */}
          <Box display={{ base: "none", md: "block" }} pt="8">
            <div className="flex flex-row justify-around">
              {/* Left section with hero text */}
              <div className="left flex flex-1 flex-col items-center justify-center h-[100vh] text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <div className="text-left">
                    <HeroText />
                  </div>
                </motion.div>
              </div>

              {/* Right section with hero image */}
              <div className="left flex flex-1 col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <Image
                    src="/images/example.svg"
                    width={{base: 600, '2xl' : 800}}
                    px={{ md: 5, lg: 10 }}
                    alt="example-ilaundry"
                  />
                </motion.div>
              </div>
            </div>
          </Box>
        </div>
        {/* Feature section */}
        <div className="background-2">
          <Feature />
        </div>
        {/* Testimonials section */}
        <Testimonials />
        {/* Stories section */}
        <Stories />
      </div>
      {/* Footer section */}
      <Footer />
    </>
  );
}
