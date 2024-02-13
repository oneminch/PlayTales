import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/react";

const IconLink = ({
  path,
  icon,
  label,
  className
}: {
  path: string;
  icon: string;
  label: string;
  className: string;
}) => {
  return (
    <Link
      aria-label={label}
      title={label}
      href={path}
      className={`w-10 h-10 flex items-center justify-center text-lg border border-gray-200 rounded-xl bg-white ${className}`}
    >
      <Icon icon={icon} />
    </Link>
  );
};

IconLink.defaultProps = {
  className: ""
};

export default IconLink;
