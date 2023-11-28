import express from "express";
import { findAllUsers } from "./users.controller.js";
import { createUsers } from "./users.controller.js";
import { findUser } from "./users.controller.js";
import { updateUser } from "./users.controller.js";
import { deleteUser } from "./users.controller.js";

export const router = express.Router();

router
    .route('/')
    .get(findAllUsers)
    .post(createUsers)

router
    .route('/:id')
    .get(findUser)
    .patch(updateUser)
    .delete(deleteUser);