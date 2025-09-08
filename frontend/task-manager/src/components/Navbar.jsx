import {Link, useNavigate} from "react-router-dom";

export default function Navbar(){

    const navigate = useNavigate();
    
    const logout = ()=>{
        localStorage.clear();
        navigate("/login");
    };

    return(
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className="font-bold text-lg">Task Manager</h1>
            <div className="space-x-4">
                <Link to="/tasks">Tasks</Link>
                <button className="bg-red-500 px-3 py-1 rounded" onClick={logout}>Logout</button>
            </div>
        </nav>
    )
}