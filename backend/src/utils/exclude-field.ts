const excludeField = (records: Record<any, any>[], key: string) => {
  for (const record of records) {
    delete record[key];
  }
  return records;
};

export default excludeField;
