import { Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  res.status(404).json({ message: `Endpoint Not Found - ${req.originalUrl}` });
};

export default notFound;
