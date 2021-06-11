import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { firestore } from '../../config/firebase';
import {regis} from '../../config/firebase'
export default function Register() {

    const [newAcc, setNewAcc] = useState({
        name:"",
        email:"",
        password:"",
      })
  
      const [acc, setAcc] = useState({})

      const passwordConfirmRef = useRef();

      const addName = (e) => {
          setNewAcc({...newAcc, name: e.target.value})
      }
  
      const addEmail = (e) => {
    
        setNewAcc({...newAcc, email: e.target.value})
      }
  
      const addPass = (e) => {
        setNewAcc({...newAcc, password: e.target.value})
      }
  
      function addNewAcc () {
          console.log("object");
        // setAcc([...acc, newAcc])
      }

  
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const { signup } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (newAcc.password.value !== passwordConfirmRef.current.value) {
        //     return setError("Passwords do not match!");
        // }

        setError("");
        setLoading(true);
        regis({email:newAcc.email,password: newAcc.password,name:newAcc.name})
        // signup(newAcc.email.current.value, passwordRef.current.value)
        //     .then((res) => {
        //         return firestore.collection('users').doc(res.user.uid).set({
        //             Name: newAcc.name.current.value,
        //         })
        //     }).then(() => {
        //         history.push('/');
        //         setLoading(false);
        //     }).catch(err => {
        //         setError(err.message);
        //         history.push('/');
        //         setLoading(false);
        //     })
    }

    return (
        <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" onChange={addEmail} value={newAcc.email} required />
                            </Form.Group>
                            <Form.Group id="email">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" onChange={addName} value={newAcc.name} required />
                            </Form.Group>
                            
                          
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={addPass} value={newAcc.password} required />
                            </Form.Group>

                            <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} required />
                            </Form.Group>
                            <Button disabled={loading} className="w-100" onClick={handleSubmit}>Sign Up</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </div>
        </Container>
    )
}
