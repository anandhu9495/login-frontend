import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Register() {
  const location = useNavigate()

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Handleregister = async() => {
    try{

      const response = await fetch('http://localhost:5000/',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          name,
          address,
          gender,
          username,
          password

        })
      })
      if(!response.ok){
        const Data = await response.json()
        throw new Error(Data.message)
      }
      else{
        console.log('Register Sucessfully');
        alert('registration successfull')
        location('/login')
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
              <img width={'100%'} src="https://www.allen.ac.in/ace2324/assets/images/register.png" alt="" />
            </div>


            <div className="col-6">

                <h2 className='text-center mb-4 mt-5'>You can Register Here</h2>

            <form className="row g-3 ml-3">
        <div className="col-md-6 mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <input type="text" className="form-control" id="gender" placeholder="Enter your gender" value={gender} onChange={(e) => setGender(e.target.value)} />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Choose a username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Choose a password" value={password} onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <div className="col-12">
          <button onClick={Handleregister} type="button" className="btn btn-primary mb-3">Register</button>
        </div>
      </form>




            </div>

        </div>

      
    </div>
  )
}

export default Register