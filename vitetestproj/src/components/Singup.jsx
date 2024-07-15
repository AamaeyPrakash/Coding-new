import React, { useState } from 'react'
import {auth} from "../Firebase.jsx"
import {createUserWithEmailAndPassword} from 'firebase/auth'

function SignUp() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] =  useState(null);
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(null);
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            alert("Account created Successfully");
        }
        catch(error){
            setError(error);
        }
    }
  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Enter your email:</label>
                <input type="email"
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                 />
                <label htmlFor="password">Enter your Password:</label>
                <input type="password"
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                 />
            </div>
            <button type='submit'>Sign Up</button>
            {error && <p>{error}</p>}
            
        </form>
    </div>
  )
}

export default SignUp