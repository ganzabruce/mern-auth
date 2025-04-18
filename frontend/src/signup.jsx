import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const [names,setNames] = useState('')
    const [password,setPassword] = useState('')
    const [error ,setError] = useState(null)
    const navigate = useNavigate()
    const handleLogin = async (e)=>{
        e.preventDefault()
        const json = {names,password}
        const response = await fetch('http://localhost:4000/signup',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(json)
        })
        if(!response.ok){
            throw Error('failed to register user')
        }
        navigate('/home')
        const msg = response.json()
        console.log(msg)
        
    }  
    return ( 
        <div className="login">
            <h1>signup</h1>
            {error && <div>{error}</div>}
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="names" value={names} onChange={(e)=>setNames(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button>submit</button>
            </form>
        </div>
     );
}
 
export default Signup;