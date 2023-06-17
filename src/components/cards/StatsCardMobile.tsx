import { ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
  Icon,
  Box,
  BoxProps,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface StatsCardProps extends BoxProps {
  icon: IconType;
  title: string;
  data: string | number;
  color?: string;
}

const StatsCardMobile = ({
  icon,
  title,
  data,
  color,
  ...rest
}: StatsCardProps) => {
  return (
    <Box {...rest}>
      <Card {...rest}>
        <CardBody p={2} w="full">
          <Flex
            align="center"
            flexDirection="row"
            p="1"
            borderRadius="lg"
            cursor="pointer"
            alignItems="center"
            gap={2}
          >
            <Box
              borderRadius="lg"
              bg={`${color ? color + ".300" : "brand.primary.300"}`}
              py={2}
              px={3}
            >
              {icon && (
                <Icon
                  color={`${color ? color + ".50" : "brand.primary.50"}`}
                  fontSize="16"
                  as={icon}
                />
              )}
            </Box>
            <Flex flexDirection="column" borderRadius="lg" cursor="pointer">
              <Text fontWeight="bold" fontSize="md">
                {data}
              </Text>
              <Text fontSize="2xs" textAlign="center" color="gray.500">
                {title}
              </Text>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

export default StatsCardMobile;
