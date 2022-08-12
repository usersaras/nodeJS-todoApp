const Todos = require('../models/todos')

const todo_index = (req,res) => {
    const getTodo = async() => {
        try{
            const resolve = await Todos.find();
            const todoList = await resolve;
            console.log(todoList)
            res.render('index', {todoList})
        }
        catch(e){
            console.log(e);
        }
    }
    getTodo();
}

const todo_create_get = (req,res) => {
    res.render('add-todo');
}

const todo_create_post = (req,res) => {
    const {title, body, completed} = (req.body);

    const addTodo = new Todos({
        title,
        body,
        completed
    })

    addTodo.save()
    .then(resolve => {
        res.redirect('/');
    })
    .catch(e=>console.log(e));
}

const todo_update_get = (req,res)=>{
    const {id} = req.params;

    const findTodo = async() => {
        try{
            const resolve = await Todos.findById(_id=id)
            const todo = await resolve;
            console.log(todo)
            res.render('edit-todo', {todo});
        }
        catch(e){
            console.log(e);
        }
    }

    findTodo();
}

const todo_update_put = (req,res) => {
    console.log("Edit");

    const {id} = req.params;

    const {title, body} = (req.body);

    const updtTodo = async() => {
        const resolve = await Todos.findByIdAndUpdate(_id=id, {
        title, body
        })
        const data = await resolve;

        res.json({redirect: '/'});
}

    updtTodo();
}

const todo_updateStatus_put = (req,res)=>{


    console.log("Updt con");
    const {id} = req.params;

    const {completed} = req.body;

    console.log("REq", req.body);
    
    const completedTodo = async() => {
        try{
            const resolve = await Todos.findByIdAndUpdate(_id=id, {
                completed: !completed
            })
            const data = await resolve;
    
            res.json({redirect: '/'})
        }
        catch(e){
            console.log(e);
        }
        
    }

    completedTodo();
    
}

const todo_delete = (req,res) => {
    const {id} = req.params;

    const deleteTodo = async() => {
        const resolve = await Todos.findByIdAndDelete(_id=id);
        const data = await resolve;
        res.json({redirect: '/todo'});
    }

    deleteTodo();
}

module.exports = {
    todo_index,
    todo_create_get,
    todo_create_post,
    todo_update_put,
    todo_update_get,
    todo_updateStatus_put,
    todo_delete
}