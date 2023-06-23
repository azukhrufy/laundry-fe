import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function WithLargeQuote() {
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
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
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          textAlign={"center"}
          maxW={"3xl"}
        >
          Sebelumnya saya menggunakan pencatatan manual untuk manajemen
          transaksi saya, dan seringkali kewalahan menanggapi pertanyaan dari
          konsumen. Semenjak menggunakan iLaundry, semuanya tercatat dengan baik
          sehingga arus kas, serta barang barang konsumen dapat tertata dengan
          baik.
        </Text>
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
        <Box textAlign={"center"}>
          <Avatar
            src={
              "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            }
            //   alt={'Jenny Wilson'}
            mb={2}
          />

          <Text fontWeight={600}>Jenny Wilson</Text>
          <Text
            fontSize={"sm"}
            color={useColorModeValue("gray.400", "gray.400")}
          >
            Pengusaha Laundry
          </Text>
        </Box>
      </motion.div>
    </Stack>
  );
}
