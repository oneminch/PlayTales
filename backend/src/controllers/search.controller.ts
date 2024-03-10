import type { Request, Response } from "express";
import prisma from "../config/prisma";
import generateFindOptions from "../utils/generate-find-options";
import { getProductPoster } from "../utils/get-product-images";

const publicFields = {
  id: true,
  title: true,
  description: true,
  ratings: true,
  price: true,
  discount: true,
  genre: true,
  poster: true,
  screenshots: true,
  releaseDate: true,
  platform: true,
  developer: true,
  publisher: true
};

const searchProducts = async (req: Request, res: Response) => {
  const { searchQuery: query } = req.params;
  const { genre, sort, page } = req.query;

  const { countOptions, findOptions } = generateFindOptions({
    genre,
    sort,
    page,
    query
  });

  try {
    const count = await prisma.product.count(countOptions);
    const products = await prisma.product.findMany({
      ...findOptions,
      select: publicFields
    });

    products.forEach((product) => {
      const productPoster = getProductPoster(product.id);

      product.poster = productPoster;
    });

    res.status(200).send({ count, products });
  } catch (err) {
    res.status(500).json({ message: "An Error Occurred Searching Products." });
  }
};

export { searchProducts };
