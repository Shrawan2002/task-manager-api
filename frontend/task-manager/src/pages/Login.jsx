import { useState } from "react"
import API from "../api";
import { useNavigate } from "react-router-dom";


export default function Login(){

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event)=>{
        setFormData((data)=>{
            return {...data, [event.target.name]: event.target.value}
        })
    }


    const navigate = useNavigate();

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const res = await API.post("/auth/login", formData);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user);
        navigate("/tasks");
    }

    return(
        <div className="flex items-center  justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
                   <h2 className="text-xl font-bold mb-4" >Login</h2>
                   <input className="border p-2 w-full mb-3" onChange={handleChange} type="email" name="email" placeholder="Email" ></input>
                   <input className="border p-2 w-full mb-3" onChange={handleChange} type="password" name="password" placeholder="Password" ></input>
                   <button className="rounded bg-green-500 text-white w-full py-2">Login</button>
            </form>
        </div>
    )
}