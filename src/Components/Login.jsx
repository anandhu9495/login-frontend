import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {

  const location  = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const HandleLogin = async() => {

    try{

      const response = await fetch('http://localhost:5000/login',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
         
          username,
          password

        })
      })
      if(response.ok){
        console.log('login successfully');
        alert('login successfull')
        location('/home')
      }
      else{
        console.log('login error');
        
      }

    }
    catch(err){
      console.log('Register error');

    }

  }


  return (
    <div>


<div className="row">

<div className="col-6">
  <img width={'100%'} src="https://cdni.iconscout.com/illustration/free/thumb/free-sign-up-form-4575543-3798675.png" alt="" />
</div>


<div className="col-6">

    <h2 className='text-center mb-4 mt-5'>You can Login Here</h2>

<form className="row g-3 ml-3">

<div className="col-md-6 mb-3">
<label htmlFor="username" className="form-label">Username</label>
<input type="text" className="form-control" id="username" placeholder="Choose a username" value={username} onChange={(e) => setUsername(e.target.value)}  />
</div>

<div className="col-md-6 mb-3">
<label htmlFor="password" className="form-label">Password</label>
<input type="password" className="form-control" id="password" placeholder="Choose a password" value={password} onChange={(e) => setPassword(e.target.value)}  />
</div>
<div className="col-12">
<button style={{marginLeft:'320px'}} onClick={HandleLogin} type="button" className="btn btn-primary mb-3 mt-3">Login</button>
</div>
</form>




</div>

</div>




    </div>
  )
}

export default Login