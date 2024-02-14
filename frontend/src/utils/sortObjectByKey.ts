const sortObjectByKey = (unsorted: any) =>
  Object.keys(unsorted)
    .sort()
    .reduce((obj: any, key: string) => {
      obj[key] = unsorted[key];
      return obj;
    }, {});

export default sortObjectByKey;
