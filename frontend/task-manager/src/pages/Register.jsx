import { useState } from "react"




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


    return(
        <div>
          <form>
             <h2>Register</h2>
             <input className="border p-2 w-full mb-3" name="name" placeholder="Name" onChange={handleChange} />
             <input className="border p-2 w-full mb-3" type="email" name="email" placeholder="Email" onChange={handleChange} />
             <input className="border p-2 w-full mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} />
             <button className="bg-blue-500 text-white w-full py-2 rounded">Register</button>
          </form>
       </div>
    )
}