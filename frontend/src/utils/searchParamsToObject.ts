const searchParamsToObject = (searchParams: URLSearchParams) => {
  const result: Record<string, string> = {};

  searchParams.sort();
  for (const [key, value] of searchParams.entries()) {
    result[key] = value;
  }
  return result;
};

export default searchParamsToObject;
