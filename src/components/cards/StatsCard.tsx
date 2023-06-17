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

const StatsCard = ({ icon, title, data, color, ...rest }: StatsCardProps) => {
  return (
    <Box {...rest}>
      <Card {...rest}>
        <CardBody py={2} px={4}>
          <Flex
            align="center"
            alignItems="center"
            flexDirection="row"
            p="1"
            gap={{ md: "1", xl: "3" }}
            borderRadius="lg"
            cursor="pointer"
          >
            <Box
              borderRadius="lg"
              bg={`${color ? color + ".300" : "brand.primary.300"}`}
              p={{ md: 2, xl: 4 }}
            >
              {icon && (
                <Icon
                  color={`${color ? color + ".50" : "brand.primary.50"}`}
                  fontSize={{ md: 20, xl: 30 }}
                  as={icon}
                />
              )}
            </Box>
            <Flex flexDirection="column" p="1">
              <Text
                fontSize={{ md: "2xs", xl: "smaller" }}
                textAlign="center"
                color="gray.500"
                lineHeight={1}
                fontWeight="light"
              >
                {title}
              </Text>
              <Text fontWeight="bold" fontSize={{ md: "2xl", xl: "4xl" }}>
                {data}
              </Text>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

export default StatsCard;
