"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrementTodoById = exports.incrementTodoById = exports.markTodoAsChecked = exports.updateTodoById = exports.removeTodoById = exports.addNewTodo = exports.getAllTodos = void 0;
const services_1 = require("./services");
function getAllTodos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let alltodo = yield (0, services_1.gettodo)();
            let completedTodo = yield (0, services_1.getcomptodo)();
            let len = alltodo.length;
            let id = alltodo[len - 1];
            console.log(id);
            res.render("todo", { alltodo, completedTodo, len, id });
        }
        catch (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
    });
}
exports.getAllTodos = getAllTodos;
function addNewTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title } = req.body;
            let newTodo = yield (0, services_1.addtodo)(title);
            console.log(newTodo);
            res.redirect("/");
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}
exports.addNewTodo = addNewTodo;
function removeTodoById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = parseInt(req.params.id);
            console.log(id);
            yield (0, services_1.deletetodo)(id);
            res.redirect("/");
        }
        catch (err) {
            res.send(err);
        }
    });
}
exports.removeTodoById = removeTodoById;
function updateTodoById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = parseInt(req.params.id);
            let data = req.body;
            console.log(data);
            yield (0, services_1.updatetodo)(id, data.title);
            res.redirect("/");
        }
        catch (err) {
            console.log(err);
            res.send(err);
        }
    });
}
exports.updateTodoById = updateTodoById;
function markTodoAsChecked(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = parseInt(req.params.id);
            yield (0, services_1.checked)(id);
            res.redirect("/");
        }
        catch (err) {
            console.log(err);
            res.json(err);
        }
    });
}
exports.markTodoAsChecked = markTodoAsChecked;
function incrementTodoById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = parseInt(req.params.id);
        yield (0, services_1.inc)(id);
        res.redirect("/");
    });
}
exports.incrementTodoById = incrementTodoById;
function decrementTodoById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = parseInt(req.params.id);
        yield (0, services_1.dec)(id);
        res.redirect("/");
    });
}
exports.decrementTodoById = decrementTodoById;
