import { LayoutProps } from "@/types";
import Layout from "./Layout";

const AuthPageLayout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <Layout
      title={title}
      className="bg-primary border border-secondary rounded-lg py-6 md:py-10"
    >
      {children}
    </Layout>
  );
};

export default AuthPageLayout;
