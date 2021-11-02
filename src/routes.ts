import express from "express";
import userController from "./controllers/userController";

const router = express.Router();

router.get('/users', userController.findAll);
router.get('/users/:userId', userController.findOne);
router.post('/users', userController.create);
router.put('/users/:userId', userController.update);
router.delete('/users/:userId', userController.destroy);

export { router };