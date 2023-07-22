import {
  Card,
  CardBody,
  Text,
  Flex,
  Icon,
  Box,
  BoxProps,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

/**
 * Represents a statistics card component that displays an icon, title, and data with optional customizations.
 *
 * @typedef {object} StatsCardProps
 * @property {IconType} icon - The icon to be displayed on the card.
 * @property {string} title - The title or label to describe the data.
 * @property {string | number} data - The numerical or string data to be displayed on the card.
 * @property {string} [color] - Optional color value to customize the background color of the card.
 * @extends {BoxProps}
 */
interface StatsCardProps extends BoxProps {
  icon: IconType;
  title: string;
  data: string | number;
  color?: string;
}

/**
 * Represents a statistics card component that displays an icon, title, and data with optional customizations.
 *
 * @param {StatsCardProps} props - The properties and configurations for the `StatsCard` component.
 * @returns {JSX.Element} The rendered JSX element representing the `StatsCard` component.
 */
const StatsCard = ({ icon, title, data, color, ...rest }: StatsCardProps) => {
  return (
    <Box {...rest}>
      {/* Card with optional background color */}
      <Card {...rest} bg="white">
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
            {/* Box containing the icon */}
            <Box
              borderRadius="lg"
              bg={`${color ? color + ".300" : "brand.primary.300"}`}
              p={{ md: 2, xl: 4 }}
            >
              {/* Icon displayed on the card */}
              {icon && (
                <Icon
                  color={`${color ? color + ".50" : "brand.primary.50"}`}
                  fontSize={{ md: 20, xl: 30 }}
                  as={icon}
                />
              )}
            </Box>
            {/* Data and title section */}
            <Flex flexDirection="column" p="1">
              {/* Title description */}
              <Text
                fontSize={{ md: "2xs", xl: "smaller" }}
                textAlign="center"
                color="gray.500"
                lineHeight={1}
                fontWeight="light"
              >
                {title}
              </Text>
              {/* Numerical or string data */}
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
