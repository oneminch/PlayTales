import getSearchParamsCount from "@/utils/get-search-params-count";
import searchParamsToObject from "@/utils/search-params-to-object";
import sortObjectByKey from "@/utils/sort-object-by-key";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useQueryParams = (label: string) => {
  const resettables = ["page"];

  const [searchParams, setSearchParams] = useSearchParams();

  const [params, setParams] = useState(() => {
    return searchParams.get(label.toLowerCase());
  });

  const updateParams = () => {
    const currentLabel = label.toLowerCase();
    if (typeof params !== "string" || params.length === 0) {
      removeParam();
      return;
    }

    setSearchParams((currentParams) => {
      currentParams.delete(resettables[0]);
      const newParams = Object.assign({}, searchParamsToObject(currentParams), {
        [currentLabel]: params
      });
      return sortObjectByKey(newParams);
    });
  };

  useEffect(updateParams, [params]);

  const resetParams = () => {
    if (getSearchParamsCount(searchParams) === 0) {
      setParams(null);
    }
  };

  useEffect(resetParams, [searchParams]);

  const removeParam = () => {
    setSearchParams((currentParams) => {
      currentParams.delete(resettables[0]);

      if (currentParams.has(label.toLowerCase())) {
        currentParams.delete(label.toLowerCase());
      }

      return sortObjectByKey(searchParamsToObject(currentParams));
    });
  };

  return { params, setParams, removeParam };
};

export default useQueryParams;
