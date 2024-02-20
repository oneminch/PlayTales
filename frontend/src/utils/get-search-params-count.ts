const getSearchParamsCount = (searchParams: URLSearchParams): number => {
  let count = 0;
  const keys = searchParams.keys();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const key of keys) {
    count += 1;
  }

  return count;
};

export default getSearchParamsCount;
