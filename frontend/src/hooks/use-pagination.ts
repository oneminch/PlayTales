import { useEffect, useState } from "react";
import useQueryParams from "./use-query-params";

const usePagination = (lastPage: number = 2) => {
  const firstPage = 1;

  const { params: page, setParams: setPage } = useQueryParams("page");
  const [currentPage, setCurrentPage] = useState<number>(firstPage);

  useEffect(() => {
    if (page) {
      setCurrentPage(parseInt(page));
    } else {
      setCurrentPage(firstPage);
    }
  }, [page]);

  const prevPage = () => {
    if (page) {
      setPage((currentPage) => {
        if (currentPage) {
          const currValue = parseInt(currentPage);
          if (currValue > 0) {
            return (currValue - 1).toString();
          } else {
            return currValue.toString();
          }
        }

        return null;
      });
    }
  };

  const nextPage = () => {
    if (page) {
      setPage((currentPage) => {
        if (currentPage) {
          const currValue = parseInt(currentPage);
          if (currValue < lastPage) {
            return (currValue + 1).toString();
          } else {
            return currValue.toString();
          }
        }

        return null;
      });
    } else {
      setPage("2");
    }
  };

  return { currentPage, setCurrentPage, prevPage, nextPage, setPage };
};

export default usePagination;
