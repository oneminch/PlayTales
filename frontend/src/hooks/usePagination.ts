import useCustomSearchParams from "./useCustomSearchParams";

const usePagination = (lastPage: number) => {
  const { params: page, setParams: setPage } = useCustomSearchParams("page");

  const prevPage = () => {
    if (page.size > 0) {
      setPage((prevPage) => {
        const currValue = prevPage.values().next().value;
        if (currValue >= 2) {
          return new Set([currValue - 1]);
        } else {
          return new Set([]);
        }
      });
    } else {
      setPage(new Set([]));
    }
  };

  const goToPage = (page: number) => {
    if (page >= 2 && page < lastPage) {
      setPage(new Set([page]));
    }
  };

  const nextPage = () => {
    if (page.size > 0) {
      setPage((prevPage) => {
        const currValue = prevPage.values().next().value;
        if (currValue < lastPage) {
          return new Set([currValue + 1]);
        } else {
          return new Set([]);
        }
      });
    } else {
      setPage(new Set([2]));
    }
  };

  return { page, prevPage, goToPage, nextPage };
};

export default usePagination;
