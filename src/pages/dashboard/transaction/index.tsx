//  next
import dynamic from "next/dynamic";
// @chakra-ui
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

// components
import LoadingOverlay from "@/components/LoadingOverlay";
import PageMeta from "@/components/PageMeta";
import SidebarWithHeader from "@/components/layout/dashboard";
import { Suspense, useEffect, useState } from "react";
import { useTransactionsList } from "@/swrs/useTransactions";
import StaticTable from "@/components/table/StaticTable";
import { BiAddToQueue } from "react-icons/bi";
import { FiSearch, FiTrash, FiEdit } from "react-icons/fi";
const AddTransaction = dynamic(
  () => import("@/sections/modals/AddTransaction")
);

/**
 * Represents the Transaction page component, displaying a title, meta information, and content related to transactions.
 *
 * @returns {JSX.Element} The rendered JSX element representing the `Transaction` page.
 */
const Transaction = () => {
  const { data, mutate } = useTransactionsList();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchResult, setSearchResult] = useState(data);
  const handleAddTransactionModal = useDisclosure();
  const column = [
    {
      title: "Tgl Transaksi",
      row: (data: any) => {
        const d = new Date(data.createdAt);
        return d.toLocaleString('ID-id');
      },
    },
    {
      title: "Nama Customer",
      value: "customerId",
    },
    {
      title: "ServiceId",
      value: "serviceId",
    },
    {
      title: "Berat Total",
      value: "weight",
    },
    {
      title: "Total",
      value: "total",
    },
    {
      title: "Estimasi Selesai",
      row: (data: any) => {
        const d = new Date(data.estimatedFinished);
        return d.toLocaleString('ID-id');
      },
    },
    {
      titleAction: () => {
        return(
          <Flex justifyContent='center'>
            <Text>Action</Text>
          </Flex>
        )
      },
      row: (data: any) => {
        return (
          <Flex
            flexDirection="row"
            gap={2}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              cursor="pointer"
              color="green.500"
              fontSize="18px"
              background="green.50"
              p={2}
              borderRadius="full"
              _hover={{background: 'green.100'}}
            >
              <FiEdit />
            </Box>
            <Box
              cursor="pointer"
              color="red.500"
              fontSize="18px"
              background="red.50"
              p={2}
              borderRadius="full"
              _hover={{background: 'red.100'}}
            >
              <FiTrash />
            </Box>
          </Flex>
        );
      },
    },
  ];

  // functions
  const handleSearch = (e: any) => {
    if (e.target.value.length > 0) {
      setIsSearchActive(true);
      setSearchResult((prev: any) =>
        prev.filter((prev: any) =>
          prev.customerId.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setIsSearchActive(false);
      setSearchResult(data);
    }
  };

  useEffect(() => {
    if (data) {
      setSearchResult(data);
    }
  }, [data]);

  if (!data) return <LoadingOverlay />;
  return (
    <>
      {/* Page Meta component for SEO and meta information */}
      <PageMeta title="Transaction" />

      {/* Content related to transactions */}
      <Box
        backgroundColor="white"
        borderRadius={8}
        shadow="md"
        padding={3}
        mb={3}
      >
        <Flex flexDirection="row" justifyContent="space-between">
          <Button
            leftIcon={<BiAddToQueue />}
            colorScheme="green"
            onClick={handleAddTransactionModal.onOpen}
          >
            Add Transaction
          </Button>
          <InputGroup maxWidth="300px">
            <InputLeftAddon>
              <FiSearch />
            </InputLeftAddon>
            <Input
              name="searchValue"
              placeholder="Ketik Nama Pelanggan"
              onChange={(e) => handleSearch(e)}
            />
          </InputGroup>
        </Flex>
      </Box>
      <Box backgroundColor="white" borderRadius={8} padding={2}>
        <StaticTable
          column={column}
          data={isSearchActive ? searchResult : data}
        />
      </Box>
      <AddTransaction
        isOpen={handleAddTransactionModal.isOpen}
        onClose={handleAddTransactionModal.onClose}
        mutate={mutate}
      />
    </>
  );
};

// Assigning the getLayout function to the Transaction page component
Transaction.getLayout = function getLayout(page: any) {
  // Wrapping the provided page with the SidebarWithHeader layout component, with a suspense fallback for loading
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <SidebarWithHeader>{page}</SidebarWithHeader>
    </Suspense>
  );
};

export default Transaction;
