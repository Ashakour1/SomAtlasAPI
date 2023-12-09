import asyncHandler from "express-async-handler";
import prisma from "../../server/config/prisma.js";

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
  const { name,type, capitalCity, districts } = req.body;

  // check if all fields are filled
  if (!name || !type || !capitalCity || !districts) {
    res.status(400);
    throw new Error("please fill all the fields");
  }

  // check  state exist
  const stateExist = await prisma.state.findFirst({
    where: {
      name,
      capitalCity,
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
      capitalCity,
      type,
      districts
    }
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
