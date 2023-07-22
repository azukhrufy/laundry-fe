// @chakra-ui
import { Box, Center, Container, Flex, Text } from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";

// ----------------------------------------------------------------------

/**
 * @returns {JSX.Element}
 */
export default function LoadingOverlay() {
  return (
    <Box pos="fixed" zIndex="overlay" inset={0} w="100vw" h="100vh" bg="white">
      <Container w="100%" h="100%">
        <Center w="100%" h="100%">
          <div>
            <Flex flexDir="column" mb={2}>
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="brand.primary.500"
                lineHeight={1}
              >
                iLaundry
              </Text>
              <Text fontSize="sm" color="brand.primary.500" lineHeight={1}>
                powered by FTS
              </Text>
            </Flex>
            <Progress size="xs" isIndeterminate w={24} mx="auto" />
          </div>
        </Center>
      </Container>
    </Box>
  );
}
