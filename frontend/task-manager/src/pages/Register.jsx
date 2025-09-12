import { useState } from "react"
import { useNavigate } from "react-router-dom";
import API from "../api"

export default function Register(){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = (event)=>{
        setFormData((data)=>{
            return {...data, [event.target.name]: event.target.value}
        })
    };

    const navigate = useNavigate()

    const handleSubmit = async (event)=>{
        event.preventDefault();
        await API.post("/auth/register", formData);
        navigate("/login");
    }

    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96 ">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input className="border p-2 w-full mb-3" type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input className="border p-2 w-full mb-3" type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input className="border p-2 w-full mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button className="bg-green-500 text-white w-full py-2 rounded">Register</button>
      </form>
    </div>
    )
}