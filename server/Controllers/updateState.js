import asyncHandler from "express-async-handler";
import prisma from "../../server/config/prisma.js";
import { request } from "express";
import { response } from "express";

/**
 * @controller updateState
 * @route  /api/states/:id
 * @description update states
 * @method PUT
 * @access Public
 * @body {name,area,district}
 */

export const updateState = asyncHandler(async (req, res) => {
  // get data from body
  const { name, type, capital, district } = req.body;
  //   get id from params
  const { id } = req.params;

  // check if all fields are filled
  const stateExist = await prisma.state.findUnique({
    where: {
      id: Number(id),
    },
  });

  // check if state exist
  if (!stateExist) {
    res.status(400);
    throw new Error("State not found");
  }

  // update state
  const updatedState = await prisma.state.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      type,
      capital,
      district,
    },
  });

  // check if state is updated
  if (!updatedState) {
    res.status(400);
    throw new Error("Invalid data");
  }
  // return updated state
  res.status(200).json({
    success: true,
    error: null,
    results: {
      message: "State updated successfully",
    },
  });
});
