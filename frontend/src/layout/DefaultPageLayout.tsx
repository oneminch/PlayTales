import { LayoutProps } from "@/types";
import Layout from "./Layout";

const DefaultPageLayout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <Layout title={title} className="space-y-6 pt-6 pb-4">
      {children}
    </Layout>
  );
};

export default DefaultPageLayout;
