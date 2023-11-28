import express from "express";
import { findAllRepairs, createRepair, findRepair, updateRepair, deleteRepair } from "./repairs.controller.js";

export const router = express.Router();

router
    .route('/')
    .get(findAllRepairs)
    .post(createRepair)

router
    .route('/:id')
    .get(findRepair)
    .patch(updateRepair)
    .delete(deleteRepair);