import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";
import { motion } from "framer-motion";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

/**
 * Represents a feature with an icon and text.
 * 
 * @typedef {object} FeatureProps - The properties for the Feature component.
 * @property {string} FeatureProps.text - The text content for the feature.
 * @property {JSX.Element} FeatureProps.icon - The JSX element representing the icon for the feature.
 * @property {string} FeatureProps.iconBg - The background color of the icon.
 * 
 * @param {FeatureProps} props - The properties for the Feature component.
 * 
 * @returns {JSX.Element} The rendered JSX element representing the feature.
 */
const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

/**
 * Represents a section with a split layout featuring an image and text content for the iLaundry landing page.
 * 
 * @returns {JSX.Element} The rendered JSX element representing the SplitWithImage section.
 */
export default function SplitWithImage() {
  return (
    <Flex
      minH={{ md: "100vh" }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
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
        <Container maxW={"5xl"} py={12}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
              {/* Feature Title */}
              <Text
                textTransform={"uppercase"}
                color={"brand.primary.500"}
                fontWeight={600}
                fontSize={"sm"}
                bg={useColorModeValue("brand.primary.50", "brand.primary.500")}
                p={2}
                alignSelf={"flex-start"}
                rounded={"md"}
              >
                Get Started
              </Text>

              {/* Main Heading */}
              <Heading>Mulai digitalisasikan bisnis laundry anda!</Heading>

              {/* Description */}
              <Text color={"gray.500"} fontSize={"lg"}>
                Dapatkan berbagai kemudahan dalam manajemen bisnis laundry anda dengan iLaundry.
              </Text>

              {/* Feature Stack */}
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >
                {/* Individual Features */}
                <Feature
                  icon={
                    <Icon
                      as={IoAnalyticsSharp}
                      color={"yellow.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Tracking Transaksi"}
                />
                <Feature
                  icon={
                    <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"Pantau Omset dan Pemasukkan"}
                />
                <Feature
                  icon={
                    <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={"Insight bisnis anda"}
                />
              </Stack>
            </Stack>

            {/* Image */}
            <Flex>
              <Image
                rounded={"md"}
                alt={"feature image"}
                src={
                  "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                }
                objectFit={"cover"}
              />
            </Flex>
          </SimpleGrid>
        </Container>
      </motion.div>
    </Flex>
  );
}

