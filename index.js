//  write the basic express boilerplate code
// with express.json() middleware and a sample route
const express = require('express');
const app = express();
app.use(express.json());
// makes sure  all the express post endpoints are working on port 3000
// will be able to parse the body if its a json body
const PORT = process.env.PORT || 3000;


// so what can i expect from the user, i can expect a title:string and description:string
app.post('/todo',function(req,res){
// for creating a todo item
});

app.get('/todo',function(req,res){
// for getting all the todo items
});
app.put('/completed',function(req,res){
// for marking a todo item as completed
});