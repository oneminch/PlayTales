import { Icon } from "@iconify/react";
import { Link, cn } from "@nextui-org/react";

const Placeholder = ({
  icon,
  primaryText,
  showIf,
  secondaryText,
  actionLink,
  className
}: {
  icon?: string;
  primaryText: string;
  showIf: boolean;
  secondaryText?: string;
  actionLink?: Record<string, string>;
  className: string;
}) => {
  return (
    showIf && (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-y-4 rounded-lg p-6 bg-primary text-primary-foreground border border-secondary min-h-56",
          className
        )}
      >
        {icon && <Icon className="text-5xl" icon={icon} />}
        <h3 className="text-lg sm:text-xl font-semibold text-center">
          {primaryText}
        </h3>
        {secondaryText && <p className="text-center">{secondaryText}</p>}
        {actionLink && (
          <Link
            href={actionLink.url}
            className="px-4 py-1.5 rounded-lg font-medium text-foreground bg-background"
          >
            {actionLink.label}
          </Link>
        )}
      </div>
    )
  );
};

Placeholder.defaultProps = {
  className: ""
};

export default Placeholder;
