import { LayoutProps } from "@/types";
import Layout from "./Layout";

const AuthPageLayout: React.FC<LayoutProps> = ({
  title,
  description,
  children
}) => {
  return (
    <Layout
      title={title}
      description={description}
      className="bg-primary border border-secondary rounded-xl py-6 md:py-10"
    >
      {children}
    </Layout>
  );
};

export default AuthPageLayout;
