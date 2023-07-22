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

interface StatsCardProps extends BoxProps {
  icon: IconType;
  title: string;
  data: string | number;
  color?: string;
}

/**
 * Represents a statistics card for mobile view with an icon, title, and data.
 *
 * @param {object} props - The properties for the StatsCardMobile component.
 * @param {IconType} props.icon - The IconType from react-icons to be displayed as the icon.
 * @param {string} props.title - The title or label for the data.
 * @param {string|number} props.data - The data to be displayed in the statistics card.
 * @param {string} [props.color] - The optional color to customize the card background and icon color.
 * @param {BoxProps} [props.rest] - Additional BoxProps to be passed to the wrapping Box component.
 *
 * @returns {JSX.Element} The rendered JSX element representing the statistics card for mobile view.
 */
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
