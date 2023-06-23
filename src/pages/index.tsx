import HeroText from "@/components/Text/LandingPage/HeroText";
import Feature from "@/components/layout/Feature";
import Footer from "@/components/layout/Footer";
import Stories from "@/components/layout/Stories";
import Testimonials from "@/components/layout/Testimonials";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Divider,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>iLaundry</title>
      </Head>
      <div className="w-full">
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
                />
              </motion.div>

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
          <Box display={{ base: "none", md: "block" }} pt="8">
            <div className="flex flex-row justify-around">
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
                    width={600}
                    px={{ md: 5, lg: 10 }}
                  />
                </motion.div>
              </div>
            </div>
          </Box>
        </div>
        <div className="background-2">
          <Feature />
        </div>
        <Testimonials />
        <Stories />
      </div>
      <Footer />
    </>
  );
}
