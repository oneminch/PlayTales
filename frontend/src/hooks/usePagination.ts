import useQueryParams from "./useQueryParams";

const usePagination = (lastPage: number) => {
  const { params: page, setParams: setPage } = useQueryParams("page");

  const prevPage = () => {
    if (page) {
      setPage((currentPage) => {
        if (currentPage) {
          const currValue = parseInt(currentPage);
          if (currValue >= 2) {
            return (currValue - 1).toString();
          } else {
            return currValue.toString();
          }
        }

        return null;
      });
    } else {
      setPage(null);
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

  return { page, prevPage, nextPage };
};

export default usePagination;
