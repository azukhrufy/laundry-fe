import LinkItemProps from "@/types/LinkItems";
import SubmenuItemProps from "@/types/SubmenuItem";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  CloseButton,
  Flex,
  FlexProps,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactText } from "react";
import { IconType } from "react-icons";

interface SidebarProps extends BoxProps {
  onClose: () => void;
  LinkItems: Array<LinkItemProps>;
}

const SidebarContent = ({ onClose, LinkItems, ...rest }: SidebarProps) => {
  const router = useRouter();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Flex flexDir="column">
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

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          active={router.asPath === link.link}
          href={link.link}
          submenu={link.submenu}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  active?: Boolean;
  href?: string;
  submenu?: Array<SubmenuItemProps>;
}
const NavItem = ({
  icon,
  children,
  active,
  href,
  submenu,
  ...rest
}: NavItemProps) => {
  const router = useRouter();
  return (
    <>
      {submenu ? (
        <Accordion allowMultiple>
          <AccordionItem border={0}>
            <Flex
              align="center"
              
              mx="4"
              mb='2'
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{
                bg: "brand.primary.500",
                color: "white",
              }}
              bg={router.asPath.indexOf(href!) > -1 ? "brand.primary.50" : "unset"}
              color={router.asPath.indexOf(href!) > -1 ? "brand.primary.500" : "unset"}
              {...rest}
            >
              <AccordionButton p="4">
                {icon && (
                  <Icon
                    mr="4"
                    fontSize="16"
                    _groupHover={{
                      color: "white",
                    }}
                    as={icon}
                  />
                )}
                {children}
                <AccordionIcon ml="4" />
              </AccordionButton>
            </Flex>
            {submenu.map((s, index) => (
              <AccordionPanel py={0} key={index}>
                <Link
                  href={s.link ?? "#"}
                  style={{ textDecoration: "none" }}
                  _focus={{ boxShadow: "none" }}
                >
                  <Flex
                    align="center"
                    px="4"
                    py='2'
                    ml="8"
                    mb='2'
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                      bg: "brand.primary.500",
                      color: "white",
                    }}
                    bg={router.asPath === s.link ? "brand.primary.50" : "unset"}
                    color={router.asPath === s.link ? "brand.primary.500" : "unset"}
                    {...rest}

                  >
                    <Text fontSize='sm'>{s.name}</Text>
                  </Flex>
                </Link>
              </AccordionPanel>
            ))}
          </AccordionItem>
        </Accordion>
      ) : (
        <Link
          href={href ?? "#"}
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "brand.primary.500",
              color: "white",
            }}
            bg={active ? "brand.primary.50" : "unset"}
            color={active ? "brand.primary.500" : "unset"}
            {...rest}
          >
            {icon && (
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: "white",
                }}
                as={icon}
              />
            )}
            {children}
          </Flex>
        </Link>
      )}
    </>
  );
};

export default SidebarContent;
