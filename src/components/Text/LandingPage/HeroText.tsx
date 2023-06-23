import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";

const HeroText = () => {
  return (
    <Box px={{base : 15, md: 5, lg: 10}}>
      <Text fontWeight="semibold" color="white" letterSpacing={2}>
        COMING SOON
      </Text>
      <Text fontWeight="bold" fontSize={{base: 45, lg: 61}} color="white" lineHeight={1.2}>
        Semuanya
      </Text>
      <Text fontWeight="semibold" fontSize={{base:35, lg: 50}} lineHeight={1.2} color="white">
        Dalam 1 Aplikasi
      </Text>
      <Divider color="white" my={15} alignItems="center" />
      <Text fontWeight="semibold" color="white" opacity="70%">
        iLaundry merupakan aplikasi berbasis web dan mobile yang menjadi all in
        one solution untuk kebutuhan usaha laundry anda
      </Text>
      <Flex alignItems="center" justifyContent="center" my={43} gap={8}>
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
