import transactionService from "@/services/transaction";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Flex,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default function AddTransaction({ isOpen, onClose, mutate }: any) {
  const [customerId, setCustomerId] = useState("");
  const [total, setTotal] = useState(0);
  const [weight, setWeight] = useState(0.0);
  const [serviceId, setServiceId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleServiceChange = (e: any) => {
    setServiceId(e.target.value);
    if (e.target.value === "Kilat") {
      setTotal(weight * 7500);
    } else if (e.target.value === "Normal") {
      setTotal(weight * 5000);
    }
  };

  const handleSubmit = async () => {
    const value = {
      customerId: customerId,
      weight: weight,
      serviceId: serviceId,
      total: total,
    };
    await transactionService.postTransaction(value);
    setIsSubmitting(false);
    mutate();
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buat Transaksi Baru</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection="column" gap={2}>
              <Input
                name="customerId"
                placeholder="Masukkan Nama Customer"
                onChange={(e) => setCustomerId(e.target.value)}
              />
              <Input
                name="weight"
                placeholder="Berat Total"
                onChange={(e) => setWeight(parseFloat(e.target.value))}
              />
              <Select
                placeholder="--Pilih Tipe Service--"
                onChange={(e) => handleServiceChange(e)}
              >
                <option value="Kilat">Kilat</option>
                <option value="Normal">Normal</option>
              </Select>
              <Flex flexDirection="row" gap={2}>
                <Text color="gray.500">Total Harga :</Text>
                <Text>{total}</Text>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              isLoading={isSubmitting}
              loadingText='Submitting'
              disabled={isSubmitting}
              onClick={(e) => {
                e.preventDefault();
                setIsSubmitting(true);
                handleSubmit();
              }}
            >
              Submit
            </Button>
            <Button variant="ghost" disabled={isSubmitting} onClick={onClose}>
              Tutup
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
