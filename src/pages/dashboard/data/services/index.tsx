import PageMeta from "@/components/PageMeta";
import SidebarWithHeader from "@/components/layout/dashboard";

const services = () => {
  return (
    <>
      <PageMeta title="Service" />
      <div>Services</div>
    </>
  );
};

export default services;

services.getLayout = function getLayout(page: any) {
  return <SidebarWithHeader>{page}</SidebarWithHeader>;
};
