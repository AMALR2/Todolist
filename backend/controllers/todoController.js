const todoModel = require('../models/todoModel')
const todoController = {
    getTodo: (req, res) => {
        todoModel.getTodo((err, data) => {
            err ? res.json(err) : res.json(data)
        })
    },
    postTodo: (req, res) => {
        todoModel.postTodo(req, res, (err, data) => {
            err ? res.json(err) : res.json(data)
        })
    },
    updateTodo: (req, res) => {
        todoModel.updateTodo(req, res, (err, data) => {
            err ? res.json(err) : res.json(data)
        })
    },
    deleteTodo: (req, res) => {
        todoModel.deleteTodo(req, res, (err, data) => {
            err ? res.json(err) : res.json(data)
        })
    },
    checkTodo: (req, res) => {
        todoModel.checkTodo(req, res, (err, data) => {
            err ? res.json(err) : res.json(data)
        })
    }
}
module.exports = todoController