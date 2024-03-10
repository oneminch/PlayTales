import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies["jwt"];

    if (!token) {
      throw new Error("No Token Provided, Action Denied!");
    }

    jwt.verify(
      token,
      process.env.JWT_KEY,
      (err: Error, decoded: jwt.JwtPayload) => {
        if (err) {
          throw new Error("Unauthorized Request, Action Denied!");
        }

        req.body.userId = decoded.userId;
        next();
      }
    );
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export default verifyToken;
