import React,{useState} from 'react'

function Contact() {
  const [user,setUser]=useState({
    username:"",
    email:"",
    message:""
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
    console.log(user);
}

  return (
    <>
    <h1>Contact US</h1>
    <form onSubmit={handleForm}>
        <label htmlFor="username">Username: </label>
        <input type='text' name='username' id='username' value={user.username} onChange={handleInput} /><br/>

        <label htmlFor="email">Email: </label>
        <input type='email' name='email' id='email' value={user.email} onChange={handleInput} /><br/>

        <label htmlFor="message">Message: </label>
        <input type='text' name='message' id='message' value={user.message} onChange={handleInput} /><br/>

        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Contact