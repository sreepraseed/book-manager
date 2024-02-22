import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('/api/signup', {
            email,
            username,
            password,
          });
      
          if (response.data.success) {
            // If the signup is successful, redirect the user to the login page
            navigate('/login');
          } else {
            // If the signup fails, display an error message
            alert('Signup failed. Please try again.');
          }
        } catch (error) {
          console.error(error);
          alert('An error occurred while signing up');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <div className="card-body">
                            <form onSubmit={handleSignup}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group" style={{ marginTop: '10px' }}>
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
                                <div className="form-group d-flex justify-content-between">
                                    <button className="btn btn-primary" type="submit" style={{ marginTop: '10px' }}>
                                        Signup
                                    </button>
                                    <button className="btn btn-link" type="button" onClick={() => navigate('/login')} style={{ marginTop: '10px' }}>
                                        Back
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
