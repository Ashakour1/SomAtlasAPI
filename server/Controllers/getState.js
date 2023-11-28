import asyncHandler from "express-async-handler";
import prisma from "../../server/config/prisma.js";
import { request } from "express";
import { response } from "express";

/**
 * @controller findState
 * @route  /api/states/:id
 * @description Find state
 * @method GET
 * @access Public
 * @param {id}
 */
export const getState = asyncHandler(async (req, res) => {
  // get id from params
  const { id } = req.params;

  // find state
  const state = await prisma.states.findUnique({
    where: {
      id: Number(id),
    },
  });
  

  // check if state exist
  if (!state) {
    res.status(400);
    throw new Error("State not found");
  }

  // return state
  res.status(200).json({
    success: true,
    error: null,
    results: {
      data: state,
    },
  });
});
