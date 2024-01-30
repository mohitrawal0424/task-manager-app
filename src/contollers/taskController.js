const TASK = require("../modals/task")

/* 
public get all tasks
*/

const addTask = async (req,res) => {
    try{
        const Task = new TASK(req.body);
        await Task.save();
        res.status(201).send("Task Saved")
    }catch(e){
        console.log(e)
        res.status(404).send("Oops ! something wrong")
    }
}

/* 
public get all task
*/

const getTasks = async (req,res) => {
    try{
        const allTasks = await TASK.find({});
        res.status(201).send(allTasks)

    }catch(e){
        console.log(e)
        res.status(404).send("Oops ! Something Wrong")
    }
}


/* 
public get one task
*/

const getTask = async (req,res) => {
    try{
        const Task = await TASK.findById(req.params.id);
        res.status(201).send(Task)

    }catch(e){
        console.log(e)
        res.status(404).send("Oops ! Something Wrong")
    }
}

/* 
public delete Task
*/

const deleteTask = async (req,res) => {
    try{
        const Task = await TASK.findByIdAndDelete(req.params.id);
        res.status(201).send("Task Deleted !")

    }catch(e){
        console.log(e)
        res.status(404).send("Oops ! Something Wrong")
    }
}

/* 
public update task with Id
*/

const updateTask = async (req,res) => {
    try{
        const updates = Object.keys(req.body)
        const Task = await TASK.findById(req.params.id);

        updates.forEach((update) => Task[update] = req.body[update]);
        
        await Task.save()
        if(!Task){
            res.status(404).send("Error !")
        }
        res.status(201).send(Task)
        // res.status(201).send(Task)

    }catch(e){
        console.log(e)
        res.status(404).send("Oops ! Something Wrong")
    }
}


module.exports = {addTask, getTasks, getTask, deleteTask, updateTask}