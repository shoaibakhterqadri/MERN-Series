import React,{useState} from 'react'

function Login() {

    const [user,setUser]=useState({
        email:"",
        password:""
    })

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,
            [name]:value,
        })
    }
    
    const handleForm=(e)=>{
        e.preventDefault();
    }

  return (
    <>
     <h1>Login</h1>
    <form onSubmit={handleForm}>
        <label htmlFor="email">Email: </label>
        <input type='email' name='email' id='email' value={user.email} onChange={handleInput} /><br/>

        <label htmlFor="password">Password: </label>
        <input type='password' name='password' id='password' value={user.password} onChange={handleInput} /><br/>

        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Login