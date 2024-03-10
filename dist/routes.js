"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller/controller");
const router = express_1.default.Router();
router.get("/", controller_1.getAllTodos);
router.post("/", controller_1.addNewTodo);
router.delete("/:id", controller_1.removeTodoById);
router.put("/:id", controller_1.updateTodoById);
router.post("/:id", controller_1.markTodoAsChecked);
router.post("/inc/:id", controller_1.incrementTodoById);
router.post("/dec/:id", controller_1.decrementTodoById);
exports.default = router;
