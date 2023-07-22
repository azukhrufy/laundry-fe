import React, { ReactNode, Suspense } from "react";
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import {
  FiHome,
  FiTrendingUp,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiList,
} from "react-icons/fi";
import SidebarContent from "./SidebarContent";
import LinkItemProps from "@/types/LinkItems";
import LoadingOverlay from "../LoadingOverlay";

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, link: "/dashboard/home" },
  { name: "Transaction", icon: FiTrendingUp, link: "/dashboard/transaction" },
  {
    name: "Master Data",
    icon: FiList,
    link: "/dashboard/data",
    submenu: [
      { name: "Services", link: "/dashboard/data/services" },
      { name: "Pelanggan", link: "/dashboard/data/pelanggan" },
    ],
  },
  { name: "Settings", icon: FiSettings, link: "/dashboard/settings" },
];

/**
 * Represents the Sidebar with Header component that provides a layout with a sidebar, header, and main content section.
 *
 * @param {object} props - The properties and configurations for the `SidebarWithHeader` component.
 * @param {ReactNode} props.children - The content to be rendered within the main content section.
 * @returns {JSX.Element} The rendered JSX element representing the `SidebarWithHeader` component.
 */
export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  // Custom hook from Chakra UI for managing the state of the sidebar
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      {/* Sidebar content for desktop view */}
      <SidebarContent
        LinkItems={LinkItems} // Assuming LinkItems is defined elsewhere in the code
        onClose={() => onClose} // Function to close the sidebar
        display={{ base: "none", md: "block" }} // Show the sidebar on md and above screen sizes
      />

      {/* Drawer component is used as a sidebar menu for mobile use */}
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose} // Function to close the drawer (sidebar on mobile)
        returnFocusOnClose={false}
        onOverlayClick={onClose} // Function to close the drawer when overlay (outside) is clicked
        size="full"
      >
        <DrawerContent>
          {/* Sidebar content for mobile view */}
          <SidebarContent onClose={onClose} LinkItems={LinkItems} />
        </DrawerContent>
      </Drawer>

      {/* Mobile navigation component */}
      <MobileNav onOpen={onOpen} />

      {/* Main content section */}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Suspense is used to render a fallback (LoadingOverlay) while loading the main content */}
        <Suspense fallback={<LoadingOverlay />}>
          {children} {/* Render the main content passed as children */}
        </Suspense>
      </Box>
    </Box>
  );
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
/**
 * Represents the Mobile Navigation component that displays the mobile header with menu options.
 *
 * @param {object} props - The properties and configurations for the `MobileNav` component.
 * @param {Function} props.onOpen - The function to open the mobile menu (sidebar) when the menu icon is clicked.
 * @returns {JSX.Element} The rendered JSX element representing the `MobileNav` component.
 */
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      {/* Menu icon to open the mobile menu (sidebar) */}
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen} // Function to open the mobile menu (sidebar)
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      {/* Brand logo (shown only on mobile view) */}
      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="xl"
        fontWeight="bold"
        color="brand.primary.500"
        lineHeight={1}
      >
        iLaundry
      </Text>

      {/* Header icons and user profile */}
      <HStack spacing={{ base: "0", md: "6" }}>
        {/* Bell icon (notification) */}
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />

        {/* User profile menu */}
        <Flex alignItems={"center"}>
          {/* User profile dropdown menu */}
          <Menu>
            {/* Menu button */}
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                {/* User profile avatar */}
                <Avatar
                  size={"sm"}
                  src={
                    "https://z-m-scontent.fcgk9-2.fna.fbcdn.net/v/t1.18169-9/12670484_1695308580757387_5879267640628321681_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=104&ccb=1-7&_nc_sid=85a577&_nc_ohc=LyJ0_l6dzw4AX-lrgi_&_nc_ad=z-m&_nc_cid=1225&_nc_eh=c201384f5ea0b048a3f72f81853832bb&_nc_rml=0&_nc_ht=z-m-scontent.fcgk9-2.fna&oh=00_AfD9l7xxzeBftPtrLm-_dDDRlAkOIvSMJhBDIHFHW29-ZQ&oe=64B5660C"
                  }
                />

                {/* User profile details */}
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Uwa Tere</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>

                {/* Dropdown icon */}
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>

            {/* Dropdown menu options */}
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
