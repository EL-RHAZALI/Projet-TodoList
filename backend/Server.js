const express = require("express");
const app = express();
app.use(express.json());

require("./Config/Connection");

const TodoRouter = require("./Router/todo");
const UserRouter = require("./Router/user");

app.use("/todo" , TodoRouter);
app.use("/user" , UserRouter);





app.listen(3000 , ()=>{
    console.log("Server is running now");
})