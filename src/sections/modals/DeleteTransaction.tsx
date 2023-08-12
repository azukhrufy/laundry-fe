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

export default function DeleteModal({ isOpen, onClose, data, callback }: any) {
  console.log(data);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Hapus Transaksi ?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Apakah anda yakin ingin menghapus transaksi {data?.customerId} ?
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" mr={4} colorScheme="red" onClick={e => {
            e.preventDefault()
            onClose()
            callback(data.id)
          }}>
            Hapus
          </Button>
          <Button variant="ghost" colorScheme="green" onClick={e => {
            e.preventDefault()
            onClose()
          }}>
            Batal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
