// schema for our project 
/*
    Todo{
    title: string,
    description: string
    completed: boolean
}
*/
const mongoose= require('mongoose');
const { string, boolean } = require('zod');
const { de } = require('zod/v4/locales');
const mongo_url= process.env.MONGO_URL;
mongoose.connect(mongo_url).then(()=>{
    console.log("connected to mongo db");
}).catch((err)=>{
    console.log("error connecting to mongo db", err);
});

const todoSchema= new mongoose.Schema({
    title:string,
    description:string,
    completed:boolean
});
const todomodel= mongoose.model('TODOcollection', todoSchema);
module.exports={
    todomodel:todomodel
};

