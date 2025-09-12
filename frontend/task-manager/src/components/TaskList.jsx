import API from "../api";
import React from "react";

export default function TaskList({tasks,setTasks}){

  const updateStatus = async(id, status)=>{
    const res = await API.put(`/tasks/${id}`, status);
    setTasks((tasks)=>(
      tasks.map((data)=> data._id === id ? res.data.task : data)
    ))
  }

  const deleteTask = async(id)=>{
    await API.delete(`/tasks/${id}`);
    setTasks((tasks)=>(
      tasks.filter((data)=> data._id !== id)
    ))
  }
  return(
    <div>
      {tasks.map((task)=>(
         <div
          key={task._id}
          className="bg-white p-4 rounded shadow flex justify-between items-center"
        >
          <div>
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-sm">Priority: {task.priority}</p>
            <p className="text-sm">Status: {task.status}</p>

            {/* 🔑 Show due date (formatted) */}
            {task.dueDate && (
              <p className="text-sm text-gray-600">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </p>
            )}
          </div>
          <div className="space-x-2">
            <button onClick={ ()=> updateStatus(task._id, {status: task.status === "pending"? "done": "pending"})}>
              {task.status === "pending" ? "Mark Done" : "Mark Pending"}
            </button>
            <button onClick={()=> deleteTask(task._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}