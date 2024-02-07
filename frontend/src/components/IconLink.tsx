import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/react";

const IconLink = ({ path, icon }: { path: string; icon: string }) => {
  return (
    <Link
      href={path}
      className="focus:global-focus w-10 h-10 flex items-center justify-center text-lg border border-gray-200 rounded-xl bg-white"
    >
      <Icon icon={icon} />
    </Link>
  );
};

export default IconLink;
