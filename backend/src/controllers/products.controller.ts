import type { Request, Response } from "express";
import prisma from "../config/prisma";
import generateFindOptions from "../utils/generate-find-options";
import {
  getProductPoster,
  getProductScreenshots
} from "../utils/get-product-images";
import { Product } from "@prisma/client";

const publicFields: Record<keyof Product, boolean> = {
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

const getAllProducts = async (req: Request, res: Response) => {
  const { genre, sort, page } = req.query;

  const { countOptions, findOptions } = generateFindOptions({
    genre,
    sort,
    page
  });

  try {
    const [count, products] = await prisma.$transaction([
      prisma.product.count(countOptions),
      prisma.product.findMany({
        ...findOptions,
        select: publicFields
      })
    ]);

    products.forEach((product) => {
      const productPoster = getProductPoster(product.id);

      product.poster = productPoster;
    });

    res.status(200).send({ count, products });
  } catch (err) {
    res.status(500).json({ message: "An Error Occurred Getting Products." });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    const product = await prisma.product.findFirst({
      where: {
        id: productId
      },
      select: publicFields
    });

    const productScreenshots = await getProductScreenshots(productId);
    product.screenshots = productScreenshots;
    product.poster = getProductPoster(productId);
    res.status(200).send({ product });
  } catch (err) {
    res
      .status(500)
      .json({ message: "An Error Occurred Getting Product Details." });
  }
};

export { getAllProducts, getSingleProduct };
