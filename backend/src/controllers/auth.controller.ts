import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../config/prisma";
import { validate, emailRegex, passwordRegex } from "../utils/validate";

const signUp = async (req: Request, res: Response) => {
  const firstName = req.body.firstName.trim();
  const lastName = req.body.lastName.trim();
  const email = req.body.email.trim();
  const password = req.body.password.trim();

  try {
    if (
      !firstName ||
      !lastName ||
      !validate(email, emailRegex) ||
      !validate(password, passwordRegex)
    ) {
      throw new Error("Validation Failed!");
    }

    await prisma.user.create({
      data: {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: bcrypt.hashSync(password, 10)
      }
    });

    res.status(200).json({ message: "Registration Successful!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const logIn = async (req: Request, res: Response) => {
  const email = req.body.email.trim();
  const password = req.body.password.trim();

  try {
    if (!validate(email, emailRegex)) {
      throw new Error("Validation Failed!");
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email
      },
      include: { wishlist: true, orders: true }
    });

    if (!user) {
      throw new Error("Invalid Email or Password! Try Again.");
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      throw new Error("Invalid Email or Password! Try Again.");
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_KEY, {
      algorithm: "HS256",
      expiresIn: 86400
    });

    res
      .cookie("jwt", token, {
        secure: true,
        sameSite: "strict",
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 14
      })
      .status(200)
      .json({
        message: "Log In Successful!"
      });
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};

const logOut = (req: Request, res: Response) => {
  try {
    res
      .clearCookie("jwt", {
        secure: true,
        httpOnly: true,
        sameSite: "strict"
      })
      .status(200)
      .json({ message: "Log Out Successful!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { signUp, logIn, logOut };
