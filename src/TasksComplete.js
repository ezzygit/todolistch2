import React, { useState } from "react";

function completeTask() {
    const [edit,setEdit]= useState ({
        id:null,
        value:"",
    });
    return completeTask.map((tasks,index)=>{
        <div className={tasks.isComplete ? 'tasksComplete':tasks}
        key={index}>

        </div>
    })
}

export default TasksComplete ;