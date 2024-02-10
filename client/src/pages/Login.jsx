import React from 'react'

function Login() {
  return (
    <>
     <h1>Register</h1>
    <form onSubmit={handleForm}>
        <label htmlFor="username">Username: </label>
        <input type='text' name='username' id='username' value={user.username} onChange={handleInput} /><br/>

        <label htmlFor="email">Email: </label>
        <input type='email' name='email' id='email' value={user.email} onChange={handleInput} /><br/>

        <label htmlFor="phone">Phone: </label>
        <input type='text' name='phone' id='phone' value={user.phone} onChange={handleInput} /><br/>

        <label htmlFor="password">Password: </label>
        <input type='password' name='password' id='password' value={user.password} onChange={handleInput} /><br/>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Login