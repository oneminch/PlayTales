import type { Request, Response } from "express";
import type { WishlistedProduct } from "@prisma/client";
import prisma from "../config/prisma";
import excludeField from "../utils/exclude-field";
import { getProductPoster } from "../utils/get-product-images";

const wishlistProduct = async (req: Request, res: Response) => {
  const { productId, userId } = req.body;

  try {
    const existingWishlistEntry: WishlistedProduct =
      await prisma.wishlistedProduct.findUnique({
        where: {
          userId_productId: {
            userId,
            productId
          }
        }
      });

    if (existingWishlistEntry) {
      await prisma.wishlistedProduct.delete({
        where: {
          userId_productId: {
            userId,
            productId
          }
        }
      });

      return res.status(200).send({ message: "Item Removed from Wishlist" });
    }

    await prisma.wishlistedProduct.create({
      data: {
        user: {
          connect: {
            id: userId
          }
        },
        product: {
          connect: {
            id: productId
          }
        }
      }
    });

    res.status(200).send({ message: "Item Added to Wishlist" });
  } catch (err) {
    res
      .status(403)
      .json({ message: "An Error Occurred Adding/Removing Product." });
  }
};

const getWishlist = async (req: Request, res: Response) => {
  const { userId } = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId
      },
      include: { wishlist: true }
    });

    const productIds = user.wishlist.map((item) => item.productId);

    const wishlistProducts = await prisma.product.findMany({
      where: {
        id: {
          in: productIds
        }
      }
    });

    wishlistProducts.forEach((product) => {
      const productPoster = getProductPoster(product.id);

      product.poster = productPoster;
    });

    const wishlist = excludeField(wishlistProducts, "orderId");

    res.status(200).send({ wishlist });
  } catch (err) {
    res.status(500).json({ message: "An Error Occurred Getting Products." });
  }
};

const orderProducts = async (req: Request, res: Response) => {
  const { productIds, userId } = req.body;

  try {
    const products = await prisma.product.findMany({
      where: {
        id: {
          in: productIds
        }
      }
    });

    const totalPrice = products.reduce(
      (acc, product) =>
        parseFloat(
          (acc + product.price * (1 - product.discount / 100)).toFixed(2)
        ),
      0
    );

    await prisma.order.create({
      data: {
        totalPrice,
        user: {
          connect: {
            id: userId
          }
        },
        products: {
          create: products.map((product) => ({
            product: {
              connect: {
                id: product.id
              }
            }
          }))
        }
      }
    });

    res.status(200).send({ message: "Order Submitted Successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Order Submission Has Failed!" });
  }
};

const getUserInfo = async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    const userInfo = await prisma.user.findFirst({
      where: {
        id: userId
      },
      include: {
        orders: {
          include: { products: true },
          orderBy: { createdAt: "desc" }
        }
      }
    });

    const userOrders = {};
    for (const order of userInfo.orders) {
      const productIds = order.products.map((product) => product.productId);
      const fullProducts = await prisma.product.findMany({
        where: { id: { in: productIds } }
      });

      const productsWithDetails = fullProducts.map((fullProduct) => ({
        id: fullProduct.id,
        title: fullProduct.title,
        description: fullProduct.description,
        poster: fullProduct.poster,
        ratings: fullProduct.ratings,
        price: fullProduct.price,
        discount: fullProduct.discount,
        genre: fullProduct.genre,
        screenshots: fullProduct.screenshots,
        releaseDate: fullProduct.releaseDate,
        platform: fullProduct.platform,
        developer: fullProduct.developer,
        publisher: fullProduct.publisher
      }));

      productsWithDetails.forEach((product) => {
        const productPoster = getProductPoster(product.id);

        product.poster = productPoster;
      });

      userOrders[order.id] = {
        id: order.id,
        createdAt: order.createdAt,
        totalPrice: order.totalPrice,
        products: productsWithDetails
      };
    }

    delete userInfo.password;
    delete userInfo.orders;
    res.status(200).json({
      userInfo,
      userOrders
    });
  } catch (err) {
    res
      .status(403)
      .json({ message: "An Error Occurred Getting User Details." });
  }
};

export { wishlistProduct, getWishlist, orderProducts, getUserInfo };
