import asyncHandler from "express-async-handler";
import prisma from "../../server/config/prisma.js";
import { request } from "express";
import { response } from "express";

/**
 * @controller setStates
 * @route  /api/states
 * @description Set states
 * @method POST
 * @access Public
 * @body {name,area,district}
 */
export const setStates = asyncHandler(async (req, res) => {
  // get data from body
  const { name, city, districts } = req.body;

  // check if all fields are filled
  if (!name || !city || !districts) {
    res.status(400);
    throw new Error("please fill all the fields");
  }

  // check  state exist
  const stateExist = await prisma.states.findFirst({
    where: {
      name,
      city,
    },
  });

  // check if state exist
  if (stateExist) {
    res.status(400);
    throw new Error("State already exist");
  }

  // create state
  const createdState = await prisma.state.create({
    data: {
      name,
      city
    },
  });

  // return response with created state
  res.status(200).json({
    success: true,
    error: null,
    results: {
      data: createdState,
    },
  });
});
