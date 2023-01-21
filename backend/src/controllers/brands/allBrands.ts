import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allBrandsController = async (req: Request, res: Response) => {
  try {
    const carData = await prisma.carBrand.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return res.status(201).json(carData);
  } catch (error) {
    return res.status(400).json({ message: "Error Fetching cars" });
  }
};

export default allBrandsController;
