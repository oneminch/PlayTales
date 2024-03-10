import { LayoutProps } from "@/types";
import { Helmet } from "react-helmet";

const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  children,
  className
}) => {
  return (
    <div className={className}>
      <Helmet>
        <title>{title ? `${title} · PlayTales` : "PlayTales"}</title>
        <meta
          name="description"
          content={
            description ? description : "PlayTales - Play Your Next Tale."
          }
        />
      </Helmet>
      {children}
    </div>
  );
};

Layout.defaultProps = {
  className: ""
};

export default Layout;
