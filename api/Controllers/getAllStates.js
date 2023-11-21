import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

/**
 * @controller getAllStates
 *  @route  /api/states
 * @description Get all states
 * @method GET
 * @access Public
 */

export const getAllStates = asyncHandler(async (req, res) => {
  const states = await prisma.state.findMany();

  if (states == 0) {
    res.status(404);
    throw new Error("States not found");
  }

  res.status(200).json({
    success: true,
    error: null,
    results: {
      data: states,
    },
    Total: states.length,
  });
});
