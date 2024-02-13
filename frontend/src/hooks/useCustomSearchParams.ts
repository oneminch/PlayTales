import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const urlSearchParamsToObject = (searchParams: URLSearchParams) => {
  const result: Record<string, string> = {};

  searchParams.sort();
  for (const [key, value] of searchParams.entries()) {
    result[key] = value;
  }
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useCustomSearchParams = (label: string, defaultValue: any = []) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [params, setParams] = useState<Set<string | number>>(() => {
    const activeParam = searchParams.get(label.toLowerCase());
    return activeParam ? new Set([activeParam]) : new Set(defaultValue);
  });

  const clearParams = () => {
    setParams(new Set(defaultValue));
  };

  useEffect(() => {
    const currentLabel = label.toLowerCase();

    if (params.size > 0) {
      const currValue = params.values().next().value;

      setSearchParams((currentParams) => {
        currentParams.set(currentLabel, currValue.toString());
        currentParams.sort();
        return urlSearchParamsToObject(currentParams);
      });
    }
  }, [params]);

  useEffect(() => {
    const currentLabel = label.toLowerCase();
    if (!searchParams.get(currentLabel)) {
      clearParams();
    }
  }, [searchParams]);

  return { params, setParams, clearParams };
};

export default useCustomSearchParams;
