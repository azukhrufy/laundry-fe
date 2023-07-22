import LoadingOverlay from "@/components/LoadingOverlay";
import PageMeta from "@/components/PageMeta";
import SidebarWithHeader from "@/components/layout/dashboard";
import { Suspense } from "react";

const Transaction = () => {
  return (
    <>
      <PageMeta title="Transaction" />
      <div>Transaction</div>
    </>
  );
};

export default Transaction;

Transaction.getLayout = function getLayout(page: any) {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <SidebarWithHeader>{page}</SidebarWithHeader>
    </Suspense>
  );
};
