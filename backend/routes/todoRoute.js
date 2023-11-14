const express=require('express')
const todoController=require('../controllers/todoController')
const router=express.Router()
router.get('/:notStatus',todoController.getTodo)
router.post('/insert',todoController.postTodo)
router.post('/update/:id',todoController.updateTodo)
router.delete('/delete/:id',todoController.deleteTodo)
router.post('/check/:id',todoController.checkTodo)
module.exports=router