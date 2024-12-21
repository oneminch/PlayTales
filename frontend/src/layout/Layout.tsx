import { LayoutProps } from "@/types";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const seoDescription = "PlayTales - Play Your Next Tale.";

const Layout: React.FC<LayoutProps> = ({ title, children, className = "" }) => {
  const [seoTitle, setSeoTitle] = useState(
    title ? `${title} · PlayTales` : "PlayTales"
  );

  useEffect(() => {
    const newTitle = title ? `${title} · PlayTales` : "PlayTales";
    setSeoTitle(newTitle);
  }, [title]);

  return (
    <div className={className}>
      <Helmet prioritizeSeoTags>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />

        <meta property="og:url" content="https://playtales.minch.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content="/social-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="playtales.minch.dev" />
        <meta property="twitter:url" content="https://playtales.minch.dev" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="/social-image.png" />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
