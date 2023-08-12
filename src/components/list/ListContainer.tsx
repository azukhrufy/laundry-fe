import { Box, Flex, Text } from "@chakra-ui/react";
import { IoChevronForward, IoCartOutline } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";

export default function ListContainer({ data }: any) {
  return (
    <Flex flexDirection="column" gap={2} px={1}>
      {data.map((item: any) => (
        <Box
          rounded="md"
          shadow="sm"
          key={item.id}
          backgroundColor="white"
          p={2}
        >
          <Flex flexDirection="column" px={4} gap={2} mb={2}>
            <Text mb={1} color="gray.600" fontSize="sm">
              {item.createdAt}
            </Text>
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="xl" fontWeight="semibold">
                {item.customerId}
              </Text>
              <Text fontSize="sm" fontWeight="bold" color="brand.primary.400">
                Rp.{item.total}
              </Text>
            </Flex>

            <Flex flexDirection="row" gap={4} alignItems="center">
              <Box
                backgroundColor={
                  item.serviceId === "Normal" ? "orange.100" : "green.100"
                }
                color={item.serviceId === "Normal" ? "orange.500" : "green.500"}
                px={2}
                py={0.5}
                rounded="xl"
              >
                <Flex flexDirection="row" gap={2} alignItems="center">
                  <Box>
                    <IoCartOutline />
                  </Box>
                  <Text fontSize="sm">{item.serviceId}</Text>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
}
