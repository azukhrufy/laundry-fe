import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      backgroundColor='white'
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4}>
      <Flex flexDir='column' minH={{ md: "100vh" }} justifyContent={{md: 'center'}} alignItems={{md: 'center'}}>
      <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Nikmati berbagai kemudahan
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
            iLaundry hadir sebagai solusi dalam memudahkan segala manajemen
            bisnis laundry anda.
          </Text>
        </Stack>
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
        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={"Pelayanan"}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={"Pencatatan dan Tracking transaksi laundry."}
              href={"#"}
            />
            <Card
              heading={"Tetap Terhubung"}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                "Pantau konsumen setia anda, dan tetap terhubung dengan mereka."
              }
              href={"#"}
            />
            <Card
              heading={"Keuangan"}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                "Dapatkan informasi terlengkap terkait transaksi dan omzet dari bisnis laundry anda."
              }
              href={"#"}
            />
          </Flex>
        </Container>
        </motion.div>
      </Flex>
    </Box>
  );
}
