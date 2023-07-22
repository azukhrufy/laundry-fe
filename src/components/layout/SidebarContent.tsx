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
interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  active?: Boolean;
  href?: string;
  submenu?: Array<SubmenuItemProps>;
}

/**
 * Represents the sidebar content with navigation items and a logo for the iLaundry app.
 *
 * @typedef {object} SidebarProps - The properties for the SidebarContent component.
 * @property {() => void} SidebarProps.onClose - The function to be called when the sidebar is closed.
 * @property {Array<LinkItemProps>} SidebarProps.LinkItems - An array of LinkItemProps representing the navigation items.
 *
 * @param {SidebarProps} props - The properties for the SidebarContent component.
 *
 * @returns {JSX.Element} The rendered JSX element representing the sidebar content.
 */
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

/**
 * Represents a navigation item in the sidebar with an icon and optional submenu.
 *
 * @typedef {object} NavItemProps - The properties for the NavItem component.
 * @property {IconType} NavItemProps.icon - The IconType from react-icons representing the icon for the navigation item.
 * @property {ReactText} NavItemProps.children - The text content for the navigation item.
 * @property {Boolean} [NavItemProps.active] - Optional boolean flag indicating if the navigation item is currently active (for styling).
 * @property {string} [NavItemProps.href] - Optional string representing the URL for the navigation item.
 * @property {Array<SubmenuItemProps>} [NavItemProps.submenu] - Optional array of SubmenuItemProps representing the submenu items.
 *
 * @param {NavItemProps} props - The properties for the NavItem component.
 *
 * @returns {JSX.Element} The rendered JSX element representing the navigation item.
 */
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
              mb="2"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{
                bg: "brand.primary.500",
                color: "white",
              }}
              bg={
                router.asPath.indexOf(href!) > -1 ? "brand.primary.50" : "unset"
              }
              color={
                router.asPath.indexOf(href!) > -1
                  ? "brand.primary.500"
                  : "unset"
              }
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
                    py="2"
                    ml="8"
                    mb="2"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                      bg: "brand.primary.500",
                      color: "white",
                    }}
                    bg={router.asPath === s.link ? "brand.primary.50" : "unset"}
                    color={
                      router.asPath === s.link ? "brand.primary.500" : "unset"
                    }
                    {...rest}
                  >
                    <Text fontSize="sm">{s.name}</Text>
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
