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
import { useState, memo, useRef, useMemo, useCallback } from "react";

const AddTransaction = memo(function AddTransaction({
  isOpen,
  onClose,
  mutate,
}: any) {
  const custIdRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);
  const [serviceId, setServiceId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setTotal = useCallback((weight: any, service: any) => {
    if (service === "Kilat") {
      return weight.current?.value * 7500;
    } else if (service === "Normal") {
      return weight.current?.value * 5000;
    }
  }, []);

  const total = useMemo(
    () => setTotal(weightRef, serviceId),
    [weightRef, serviceId]
  );

  const handleSubmit = async () => {
    const value = {
      customerId: custIdRef.current?.value,
      weight: weightRef.current?.value,
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
                ref={custIdRef}
              />
              <Input
                name="weight"
                placeholder="Berat Total"
                type="number"
                ref={weightRef}
              />
              <Select
                placeholder="--Pilih Tipe Service--"
                onChange={(e) => setServiceId(e.currentTarget.value)}
              >
                <option value="Kilat">Kilat</option>
                <option value="Normal">Normal</option>
              </Select>
              <Flex flexDirection="row" gap={2}>
                <Text color="gray.500">Total Harga :</Text>
                <Text>{total ?? 0}</Text>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              isLoading={isSubmitting}
              loadingText="Submitting"
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
});

export default AddTransaction;
