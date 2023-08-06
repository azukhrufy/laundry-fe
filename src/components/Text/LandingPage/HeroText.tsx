import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";

/**
 * Represents the hero text section for the iLaundry landing page.
 * 
 * @returns {JSX.Element} The rendered JSX element representing the hero text section.
 */
const HeroText = () => {
  return (
    <Box px={{base : 15, md: 5, lg: 10}}>
      {/* Title - "COMING SOON" */}
      <Text fontWeight="semibold" color="white" letterSpacing={2}>
        COMING SOON
      </Text>

      {/* Title - "Semuanya" */}
      <Text fontWeight="bold" fontSize={{base: 45, lg: 61}} color="white" lineHeight={1.2}>
        Semuanya
      </Text>

      {/* Subtitle - "Dalam 1 Aplikasi" */}
      <Text fontWeight="semibold" fontSize={{base:35, lg: 50, '2xl': 65}} lineHeight={1.2} color="white">
        Dalam 1 Aplikasi
      </Text>

      {/* Divider */}
      <Divider color="white" my={15} alignItems="center" />

      {/* Description */}
      <Text fontWeight="semibold" color="white" opacity="70%" fontSize={{base:'sm', lg: 'normal', '2xl': 'xl'}}>
        iLaundry merupakan aplikasi berbasis web dan mobile yang menjadi all in
        one solution untuk kebutuhan usaha laundry anda
      </Text>

      {/* Call-to-action buttons */}
      <Flex alignItems="center" justifyContent={{base: "center", lg:'flex-start'}} my={43} gap={8}>
        <Button
          colorScheme="brand.complementary"
          variant="solid"
          size="lg"
          px={30}
          py={15}
        >
          Get Started
        </Button>
        <Button variant="outline" color="white" size="lg" px={30} py={15}>
          Free Trial
        </Button>
      </Flex>
    </Box>
  );
};

export default HeroText;

