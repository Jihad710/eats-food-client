import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Button, Container, Form } from 'react-bootstrap';

import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const { user, loading, login, CreateUser, logOut, loginWithGoogle, loginWithGithub } = useContext(AuthContext)
    const {error, setError}= useState(null)
    const {success, setSuccess}= useState(null)
    const [showPassword, setShowPassword] = useState(false)
    
    const handleLogin=(event)=>{
        event.preventDefault()
        console.log("jihad")
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        
        login(email, password)
        .then((result)=>{
            const loggedUser = result.user
            console.log(loggedUser)
            
        })
        .catch(error=>{console.log(error.message)})
    }
    const handleLoginWithGoogle=()=>{
        loginWithGoogle()
        .then((result)=>{
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error=>{console.log(error.message)})
    }
    const handleLoginWithGitHub=()=>{
        loginWithGithub()
        .then((result)=>{
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error=>{console.log(error.message)})
    }


   
    

    return (
        <div>
            <Container className='w-50 mx-auto'>
            <h2 className='text-center'>Login Eats Food</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name='password' type={showPassword? "text" : "password"} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check  type="checkbox" label="Show password" checked={showPassword} onChange={toggleShowPassword}/>
                </Form.Group>
                <div className="d-grid gap-2">
                <Button  variant="primary" type="submit">
                    Login
                </Button>
    </div>
                <p className=' my-3'><small>Don't have an Account? Please <Link to={`/register`} className='text-primary' >Sign up</Link></small></p>
            </Form>
            <hr className='w-75 mx-auto my-5'/>
            <div className="d-grid gap-2">
            <Button onClick={handleLoginWithGoogle} className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button onClick={handleLoginWithGitHub} variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
            </div>
        </Container>
        </div>
    );
};

export default Login;