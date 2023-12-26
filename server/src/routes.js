const express = require('express')
const { readTodos, readTodoById, createTodo, updateTodo, deleteTodo } = require('./controller.js')
const router = express.Router()

//Raiz
router.get('/', (req, res) => {
  res.send('"its safe to say that we might even be falling in love" - Victoria Monet')
})

//Rotas
router.get('/todos', readTodos)
router.get('/todos/:id', readTodoById)
router.post('/todos', createTodo)
router.put('/todos/:id', updateTodo)
router.delete('/todos/:id', deleteTodo)

module.exports = router