import asyncHandler from "express-async-handler";
import prisma from "../../server/config/prisma.js";

export const deleteState = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const stateExist = await prisma.state.findUnique({
    where: {
      id: Number(id),
    },
  });
  // check if state exist
  if (!stateExist) {
    res.status(400);
    throw new Error(`state not found ${id}`);
  }
  // delete state
  const deletedState = await prisma.state.delete({
    where: {
      id: Number(id),
    },
  });

  // return deleted state
  res.status(200).json({
    success: true,
    error: null,
    results: {
      message: "State deleted successfully",
    },
  });
});
