const generateFindOptions = ({
  page,
  genre,
  sort,
  query
}: {
  page?: any;
  genre?: any;
  sort?: any;
  query?: string;
}) => {
  const productsPerPage = 12;
  const skipValue = page ? (parseInt(page) - 1) * productsPerPage : 0;

  const options: any = {
    where: {},
    orderBy: [
      {
        title: "asc"
      }
    ]
  };

  if (query) {
    options.where.title = { contains: query, mode: "insensitive" };
  }

  if (genre) {
    options.where.genre = { has: genre.toLowerCase() };
  }

  const countOptions = structuredClone(options);
  const findOptions = structuredClone(options);

  findOptions.skip = skipValue;
  findOptions.take = productsPerPage;

  if (sort) {
    const [sortByKey, sortByValue] = sort.split("-");

    if (sortByKey === "price") {
      findOptions.orderBy =
        sortByValue === "asc"
          ? [
              {
                price: "asc"
              },
              {
                discount: "desc"
              }
            ]
          : [
              {
                price: "desc"
              },
              {
                discount: "asc"
              }
            ];
    } else {
      findOptions.orderBy = [
        {
          [sortByKey]: sortByValue
        }
      ];
    }
  }

  return { countOptions, findOptions };
};

export default generateFindOptions;
