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

  useEffect(() => {
    const currentLabel = label.toLowerCase();

    if (params.size > 0) {
      const currValue = Array.from(params)[0];

      setSearchParams((currentParams) => {
        currentParams.set(currentLabel, currValue.toString());
        currentParams.sort();
        return urlSearchParamsToObject(currentParams);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useEffect(() => {
    const currentLabel = label.toLowerCase();
    if (!searchParams.get(currentLabel)) {
      setParams(new Set(defaultValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return { params, setParams };
};

export default useCustomSearchParams;
