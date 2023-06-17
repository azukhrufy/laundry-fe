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
          <div className="flex flex-row justify-around">
            <div className="left flex flex-col items-center justify-center h-[100vh] text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="text-left">
                  <Box maxW={400}>
                    <Text fontWeight="semibold" color="white" letterSpacing={2}>
                      COMING SOON
                    </Text>
                    <Text
                      fontWeight="bold"
                      fontSize={61}
                      color="white"
                      lineHeight={1.2}
                    >
                      Semuanya
                    </Text>
                    <Text
                      fontWeight="semibold"
                      fontSize={50}
                      lineHeight={1.2}
                      color="white"
                    >
                      Dalam 1 Aplikasi
                    </Text>
                    <Divider color="white" my={15} />
                    <Text fontWeight="semibold" color="white" opacity="70%">
                      iLaundry merupakan aplikasi berbasis web dan mobile yang
                      menjadi all in one solution untuk kebutuhan usaha laundry
                      anda
                    </Text>
                    <Flex alignItems="center" my={43} gap={8}>
                      <Button
                        colorScheme="brand.complementary"
                        variant="solid"
                        size="lg"
                        px={30}
                        py={15}
                      >
                        Get Started
                      </Button>
                      <Button
                        variant="outline"
                        color="white"
                        size="lg"
                        px={30}
                        py={15}
                      >
                        Free Trial
                      </Button>
                    </Flex>
                  </Box>
                </div>
              </motion.div>
            </div>
            <div className="left flex col items-center justify-center">
              {/* <Box boxSize={600}> */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Image src="/images/example.svg" width={600} />
              </motion.div>

              {/* </Box> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
