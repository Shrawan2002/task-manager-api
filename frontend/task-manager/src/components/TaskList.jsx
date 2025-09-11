import { useEffect, useState } from "react"
import API from "../api";

export default function TaskList({tasks, setTasks}){
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      console.log(res.data); // success case
    } catch (err) {
      if (err.response) {
        // Server responded with status code (401, 500, etc.)
        console.log("Server error:", err.response.data.error);
      } else if (err.request) {
        // Request made, no response
        console.log("No response received:", err.request);
      } else {
        // Something else went wrong in setting up request
        console.log("Error setting up request:", err.message);
      }
    }
  };

  fetchTasks();
}, []);

    return (
        <div className="space-y-3">
          {tasks.map((task)=> (
              <div key={task._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{task.title}</h3>
                  <p>{task.description}</p>
                  <p className="text-sm">Priority: {task.priority}</p>
                  <p className="text-sm">Status: {task.status} </p>
                </div>
            ))
          }
        </div>
        </div>
    )
}