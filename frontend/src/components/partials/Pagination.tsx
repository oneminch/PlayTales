import { Button } from "@nextui-org/react";
import usePagination from "@/hooks/usePagination";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const Pagination = ({ total }: { total: number }) => {
  const firstPage = 1;
  const lastPage = Math.ceil(total / 8);

  const { page, prevPage, nextPage } = usePagination(lastPage);
  const [currentPage, setCurrentPage] = useState(firstPage);

  useEffect(() => {
    if (page) {
      setCurrentPage(parseInt(page));
    } else {
      setCurrentPage(firstPage);
    }
  }, [page]);

  return (
    <section className="flex items-center gap-x-4 mx-auto select-none">
      <Button
        isDisabled={currentPage <= 1}
        className="rounded-full pr-6"
        onPress={prevPage}
        startContent={<Icon icon="heroicons:chevron-left-20-solid" />}
      >
        Prev
      </Button>
      <p>Page {currentPage}</p>
      <Button
        isDisabled={currentPage >= lastPage}
        className="rounded-full pl-6"
        onPress={nextPage}
        endContent={<Icon icon="heroicons:chevron-right-20-solid" />}
      >
        Next
      </Button>
    </section>
  );
};

export default Pagination;
