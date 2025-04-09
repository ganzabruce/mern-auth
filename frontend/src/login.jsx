import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [names,setNames] = useState('')
    const [password,setPassword] = useState('')
    const [error ,setError] = useState(null)
    const navigate = useNavigate()
    const handleLogin = async (e)=>{
        e.preventDefault()
        const json = {names,password}
        const response = await fetch('localhost:4000/login',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(json)
        })
        if(!response.ok){
            throw Error('failed to register user')
        }
        navigate('/home')
        
    }  
    return ( 
        <div className="login">
            <h1>login</h1>
            <form onSubmit={handleLogin}>
                {error && <div>{error}</div>}
                <input type="text" placeholder="names" value={names} onChange={(e)=>setNames(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button>submit</button>
            </form>
        </div>
     );
}
 
export default Login;