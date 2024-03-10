import { Request, Response } from 'express';
import {addtodo,gettodo,getcomptodo,updatetodo,checked,deletetodo,inc,dec} from "./services"


export async function getAllTodos(req: Request, res: Response) {
    try {
        let alltodo = await gettodo();
        let completedTodo = await getcomptodo();
        let len = alltodo.length;
        let id = alltodo[len - 1];
        console.log(id);
        res.render("todo", { alltodo, completedTodo, len, id });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}

export async function addNewTodo(req: Request, res: Response) {
    try {
        const { title } = req.body;
        let newTodo = await addtodo(title);
        console.log(newTodo);
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function removeTodoById(req: Request, res: Response) {
    try {
        let id = parseInt(req.params.id);
        console.log(id);
        await deletetodo(id);
        res.redirect("/");
    } catch (err) {
        res.send(err);
    }
}

export async function updateTodoById(req: Request, res: Response) {
    try {
        let id = parseInt(req.params.id);
        let data = req.body;
        console.log(data);
        await updatetodo(id, data.title);
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

export async function markTodoAsChecked(req: Request, res: Response) {
    try {
        let id = parseInt(req.params.id);
        await checked(id);
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}

export async function incrementTodoById(req: Request, res: Response) {
    let id = parseInt(req.params.id);
    await inc(id);
    res.redirect("/");
}

export async function decrementTodoById(req: Request, res: Response) {
    let id = parseInt(req.params.id);
    await dec(id);
    res.redirect("/");
}