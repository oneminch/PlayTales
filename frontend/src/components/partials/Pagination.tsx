import { Button } from "@nextui-org/react";
import usePagination from "@/hooks/use-pagination";
import { Icon } from "@iconify/react";

const Pagination = ({ total }: { total: number }) => {
  const lastPage = Math.ceil(total / 12);

  const { currentPage, prevPage, nextPage } = usePagination(lastPage);

  return (
    total > 0 && (
      <section className="flex items-center gap-x-4 mx-auto select-none">
        <Button
          isDisabled={currentPage <= 1}
          className="rounded-full pr-6 bg-primary text-foreground border border-secondary"
          onPress={prevPage}
          startContent={<Icon icon="heroicons:chevron-left-20-solid" />}
        >
          Prev
        </Button>
        <p>Page {currentPage}</p>
        <Button
          isDisabled={currentPage >= lastPage}
          className="rounded-full pl-6 bg-primary text-foreground border border-secondary"
          onPress={nextPage}
          endContent={<Icon icon="heroicons:chevron-right-20-solid" />}
        >
          Next
        </Button>
      </section>
    )
  );
};

export default Pagination;
