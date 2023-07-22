import LoadingOverlay from "@/components/LoadingOverlay";
import PageMeta from "@/components/PageMeta";
import SidebarWithHeader from "@/components/layout/dashboard";
import { Suspense } from "react";

/**
 * Represents the Transaction page component, displaying a title, meta information, and content related to transactions.
 *
 * @returns {JSX.Element} The rendered JSX element representing the `Transaction` page.
 */
const Transaction = () => {
  return (
    <>
      {/* Page Meta component for SEO and meta information */}
      <PageMeta title="Transaction" />

      {/* Content related to transactions */}
      <div>Transaction</div>
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