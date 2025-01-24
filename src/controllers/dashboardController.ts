import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client/extension";
import exp from "constants";


const Prisma = new PrismaClient()



export const getDashboardMetrics = async (
    req: Request, 
    res:Response
): Promise<void> => {
    try {
        const popularProducts = await Prisma.product.findMany({
            take: 15,
            orderBy: {
                stockQuantity: 'desc'
            }
        })
        const salesSummary = await Prisma.salesSummary.findMany({
            take: 5,
            orderBy: {
                date: 'desc'
            }
        })
        const purchaseSummary = await Prisma.purchaseSummary.findMany({
            take: 5,
            orderBy: {
                date: 'desc'
            }
        })
        const expenseSummary = await Prisma.expenseSummary.findMany({
            take: 5,
            orderBy: {
                date: 'desc'
            }
        })
        const expenseByCategorySummaryRaw = await Prisma.expenseByCategorySummary.findMany({
            take: 5,
            orderBy: {
                date: 'desc'
            }
        })

     const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
        (item) => ({
      ...item,
      amount: item.amount.toString(),
     })
    );

     res.json({
        popularProducts,
        purchaseSummary,
        expenseByCategorySummary,
        expenseSummary,
        salesSummary,
     })



    } catch (error) {
        res.status(500).json({message: "error retreiving dashboard metrics"});
    }

};