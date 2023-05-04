import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';



const Register = () => {
    const {auth, user, loading, login, CreateUser, logOut, loginWithGoogle, loginWithGithub } = useContext(AuthContext)
    const [check, setCheck] = useState(false)
    
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleCreateUser =(event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const rePassword = form.rePassword.value
        
        if (password !== rePassword){
            toast.error('Password did not matched!');
           return;
        }

        CreateUser(email, password)
        .then(result=>{
            const loggedUser = result.user
            updateProfile(auth.currentUser,{
                displayName: name,
                photoURL: photo,
              }).then(() => {
                // Update successful
              }).catch((error) => {
                console.log(error.message)
              });
            
            console.log(loggedUser)
            toast.success('Registration success')
            form.reset()
            navigate(from , {replace:true})
        })
        .catch(error=>{toast.error(error.message)})
        

    }

    
    const handleAccept = () => {
        setCheck(!check);
        
      };
    return (
        <div>
             <Container className='w-50 mx-auto'>
            <h2 className='text-center'>Sign up in to EatsExtra</h2>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required name='name' type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control  name='photo' type="text" placeholder="Enter photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control autoComplete='off' required name='password' type='text' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRePassword">
                    <Form.Label>Re-Password</Form.Label>
                    <Form.Control autoComplete='off' required name='rePassword' type='text' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check  type="checkbox" label={<span>Accept <Link to={`/terms`}> Terms & Condition</Link></span>} checked={check} onChange={handleAccept}/>
                </Form.Group>
                <div className="d-grid gap-2">
                <Button className='fw-semibold'  disabled={!check} variant='warning' type='submit'>Sign Up</Button>
    </div>
                <p className=' my-3'><small>Already have an Account? Please <Link to={`/login`} className='text-primary' >Login</Link></small></p>
            </Form>

            
        </Container>
        </div>
    );
};

export default Register;