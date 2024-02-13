import useCustomSearchParams from "./useCustomSearchParams";

const usePagination = (lastPage: number) => {
  const { params: page, setParams: setPage } = useCustomSearchParams("page");

  const prevPage = () => {
    if (page.size > 0) {
      setPage((prevPage) => {
        const currValue = parseInt(prevPage.values().next().value);
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

  const nextPage = () => {
    if (page.size > 0) {
      setPage((prevPage) => {
        const currValue = parseInt(prevPage.values().next().value);
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

  return { page, prevPage, nextPage };
};

export default usePagination;
