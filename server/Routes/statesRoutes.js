import express from "express";

import { getAllStates } from "../Controllers/getAllStates.js";
import { setStates } from "../Controllers/setStates.js";
import { updateState } from "../Controllers/updateState.js";
import { deleteState } from "../Controllers/deleteState.js";
import { getState } from "../Controllers/getState.js";
const router = express.Router();

/**
 * @controller getAllStates
 * @route  /api/states
 * @description Get all states
 * @method GET
 * @access Public
 */
router.get("/", getAllStates);
// /
// router.post("/", setStates);
// /**
//  * @controller updateState
//  * @route  /api/states/:id
//  * @description update states
//  * @method PUT
//  * @access Public
//  * @body {name,area,district}
//  * @param {id}
//  */
// router.put("/:id", updateState);
// /**
//  * @controller deleteState
//  * @route  /api/states/:id
//  * @description delete states
//  * @method DELETE
//  * @access Public
//  * @param {id}
//  */
// router.delete("/:id", deleteState);
/**
 * @controller getState
 * @route  /api/states/:id
 * @description Get states
 * @method GET
 * @access Public
 * @param {id}
 */
router.get("/:id", getState);

export default router;
