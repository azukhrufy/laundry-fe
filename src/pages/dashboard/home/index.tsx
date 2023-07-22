import {
  Box,
  Grid,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { FiActivity, FiCheck, FiTrendingUp, FiUsers } from "react-icons/fi";
import SidebarWithHeader from "@/components/layout/dashboard";
import StatsCardMobile from "@/components/cards/StatsCardMobile";
import StatsCard from "@/components/cards/StatsCard";
import PageMeta from "@/components/PageMeta";

const cardItems = [
  { title: "Total Transaksi", icon: FiTrendingUp, data: 50, color: "pink" },
  { title: "Total Pelanggan", icon: FiUsers, data: 20, color: "green" },
  { title: "Transaksi Sukses", icon: FiCheck, data: 25, color: "cyan" },
  { title: "Transaksi Berjalan", icon: FiActivity, data: 25, color: "orange" },
];

Home.getLayout = function getLayout(page: any) {
  return <SidebarWithHeader>{page}</SidebarWithHeader>;
};

/**
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <>
      <PageMeta title="Home" />
      <Box minH="100vh">
        <Box display={{ base: "none", md: "block" }}>
          <Grid
            templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={{ md: 2, xl: 4 }}
            flexWrap="wrap"
          >
            {cardItems.map((item) => (
              <StatsCard
                icon={item.icon}
                title={item.title}
                data={item.data}
                color={item.color}
                display={{ base: "none", md: "block" }}
                key={item.data}
              />
            ))}
          </Grid>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {cardItems.map((item) => (
              <StatsCardMobile
                icon={item.icon}
                title={item.title}
                data={item.data}
                color={item.color}
                display={{ base: "block", md: "none" }}
                key={item.data}
              />
            ))}
          </Grid>
        </Box>
        <Box bg="white" my={4} borderRadius="lg" py={3} px={4}>
          <StatGroup>
            <Stat>
              <StatLabel color="gray.500">Avg. Pemasukkan Bulanan</StatLabel>
              <StatNumber>3,345,670</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel color="gray.500">Avg. Pemasukkan Mingguan</StatLabel>
              <StatNumber>350,000</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                9.05%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Box>
      </Box>
    </>
  );
}
