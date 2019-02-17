var mongoose = require('mongoose')

//conect to database

mongoose.connect('mongodb+srv://sayedabdul:sayed1234@mytodo-wkuw1.mongodb.net/test?retryWrites=true')

//create schema

var todoSchema = new mongoose.Schema({
  item: String
})

var Todo = mongoose.model('todo', todoSchema)

// var data = [
//   {item:'get milk'},
//   {item:'get node'},
//   {item:'get meat'}
// ]

module.exports = function(app) {
  
  app.get('/todo', (req, res) => {
    //get data from db
    Todo.find({}, (err, data)=> {
      if(err) throw err;
      res.render('todo', {data})
    })
  })

  app.post('/todo', (req, res) => {
    //get data from view nd add
    var newTodo = Todo(req.body).save((err, data) => {
      if(err){
        console.log(err)
      }
      else{
        res.json(data)
      }
    })
  })

  app.delete('/todo/:item', (req, res) => {
    //delete the requested item from mongo db

    Todo.find({item: req.params.item}).remove((err, data) => {
      if(err){
        console.log(err)
      }
      else{
        res.json(data)
      }
    })
  })
}