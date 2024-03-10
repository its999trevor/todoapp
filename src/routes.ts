import express from 'express';
import {
    getAllTodos,
    addNewTodo,
    removeTodoById,
    updateTodoById,
    markTodoAsChecked,
    incrementTodoById,
    decrementTodoById
} from './controller/controller';

const router = express.Router();

router.get("/", getAllTodos);
router.post("/", addNewTodo);
router.delete("/:id", removeTodoById);
router.put("/:id", updateTodoById);
router.post("/:id", markTodoAsChecked);
router.post("/inc/:id", incrementTodoById);
router.post("/dec/:id", decrementTodoById);

export default router;
