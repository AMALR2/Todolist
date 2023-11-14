const db = require('../config/config')
const todoModel = {
    getTodo: (req,res,callback) => {
        const sql = "SELECT * FROM `todo` WHERE `status`!=?"
        const {notStatus}= req.params
        db.query(sql, [notStatus], callback)
    },
    postTodo: (req, res, callback) => {
        const sql = "INSERT INTO `todo`(`title`,`status`) VALUES (?)"
        const values = [
            req.body.title,
            0
        ]
        db.query(sql, [values], callback)
    },
    updateTodo: (req, res, callback) => {
        const sql = "UPDATE `todo` SET `title` = ? WHERE `id` = ?"
        const {id}= req.params
        const title=req.body.title
        db.query(sql, [title,id], callback)
    },
    deleteTodo: (req, res, callback) => {
        const sql = "DELETE FROM `todo` WHERE `id` = ?"
        const {id}= req.params
        db.query(sql, [id], callback)
    },
    checkTodo: (req, res, callback) => {
        const sql = "UPDATE `todo` SET `status` = 1-`status` WHERE `id` = ?"
        const {id}= req.params
        db.query(sql, [id], callback)
    }
}
module.exports = todoModel