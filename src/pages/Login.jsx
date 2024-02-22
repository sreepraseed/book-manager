import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Signup from './SignUp'
import axios from 'axios';
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showSignup, setShowSignup] = useState(false)
    const navigate = useNavigate()

    const handleShowSignup = () => {
        navigate('/signup')
    }

    const handleLogin = async () => {
        try {
          const response = await axios.post('/api/login', {
            username,
            password,
          });
      
          if (response.data.success) {
            // If the login is successful, redirect the user to the home page
            navigate('/');
          } else {
            // If the login fails, display an error message
            alert('Invalid username or password');
          }
        } catch (error) {
          console.error(error);
          alert('An error occurred while logging in');
        }
      };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group" style={{ marginTop: '10px' }}>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary" onClick={handleLogin} style={{ marginTop: '10px' }}>
                                Login
                            </button>
                            <button className="btn btn-link" onClick={handleShowSignup}>
                                Signup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showSignup && <Signup />}
        </div>
    )
}

export default Login