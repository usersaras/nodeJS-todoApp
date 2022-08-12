const express= require('express');
const Todos = require('../models/todos')

const router = express.Router();

const todo_controller = require('../controllers/todoController')

router.get('/', todo_controller.todo_index);

router.get('/add-todo', todo_controller.todo_create_get);

router.post('/add-todo', todo_controller.todo_create_post)

router.get('/edit-todo/:id', todo_controller.todo_update_get)

router.put('/edit-todo/:id', todo_controller.todo_update_put);

router.put('/update-todo-status/:id', todo_controller.todo_updateStatus_put);

router.delete('/delete-todo/:id', todo_controller.todo_delete);

module.exports = router;