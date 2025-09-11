import { useState } from "react"
import API from "../api";


export default function TaskForm({onTaskCreated}){

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "medium",
        status: "pending",
        dueDate: ""

    });

    const handleChange = async(event)=>{
        setFormData((data)=>{
            return {...data, [event.target.name]: event.target.value}
        })
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const res = await API.post("/tasks", formData);
        onTaskCreated(res.data);
        setFormData({title: "", description: "", priority: "medium" , status: "pending", dueDate: "" })
    }
    return (
        <form onSubmit={handleSubmit} className="bg-white p-4  rounded shadow mb-4  flex flex-col gap-3">
            <h2 className="text-xl font-bold mb-4 text-center">Create Task</h2>
            <input type="text" value={formData.title} onChange={handleChange} className="border p-2 w-full "  name="title" placeholder="Task title"  required />
            <textarea value={formData.description} onClick={handleChange} className="border p-2 w-full " name="description"  placeholder="Description" />
             {/* 🔑 Priority & Status on the same horizontal line */}
            <div className="flex gap-3">
                <select name="priority"
                value={formData.priority}
                onChange={handleChange}
                 className="border p-2 w-1/2"
                 >
                    <option value= "medium">Priority: Medium</option>
                    <option value= "low">Low</option>
                    <option value= "high">High</option>
                 </select>

                <select name="status"
                value={formData.status}
                onChange={handleChange}
                 className="border p-2 w-1/2">
                    <option value= "pending">Status: Pending</option>
                    <option value= "done">Done</option>
                 </select>
            </div>
            <input
             type="date"
             value={formData.dueDate}
             name="dueDate"
             onChange={handleChange}
             className="border p-2 w-full"
            />
        </form>
    )
}