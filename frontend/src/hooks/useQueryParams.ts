import getSearchParamsCount from "@/utils/getSearchParamsCount";
import searchParamsToObject from "@/utils/searchParamsToObject";
import sortObjectByKey from "@/utils/sortObjectByKey";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useQueryParams = (label: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [params, setParams] = useState(() => {
    return searchParams.get(label.toLowerCase());
  });

  const updateParams = () => {
    const currentLabel = label.toLowerCase();

    if (params) {
      setSearchParams((currentParams) => {
        const newParams = Object.assign(
          {},
          searchParamsToObject(currentParams),
          {
            [currentLabel]: params
          }
        );
        return sortObjectByKey(newParams);
      });
    }
  };

  const resetParams = () => {
    if (getSearchParamsCount(searchParams) < 1) {
      setParams(null);
    }
  };

  useEffect(updateParams, [params]);

  useEffect(resetParams, [searchParams]);

  return { params, setParams };
};

export default useQueryParams;
