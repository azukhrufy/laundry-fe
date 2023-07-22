import PageMeta from "@/components/PageMeta";
import SidebarWithHeader from "@/components/layout/dashboard";

/**
 * Represents the Services page component, displaying a title, meta information, and content related to services.
 *
 * @returns {JSX.Element} The rendered JSX element representing the `services` page.
 */
const services = () => {
  return (
    <>
      {/* Page Meta component for SEO and meta information */}
      <PageMeta title="Service" />

      {/* Content related to services */}
      <div>Services</div>
    </>
  );
};

// Assigning the getLayout function to the services page component
services.getLayout = function getLayout(page: any) {
  // Wrapping the provided page with the SidebarWithHeader layout component
  return <SidebarWithHeader>{page}</SidebarWithHeader>;
};

export default services;

