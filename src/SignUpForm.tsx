import React, { useState } from 'react';
import axios from 'axios';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    const signUpDto = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:8000/auth/signup', signUpDto);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to sign up. Please try later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
       <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
        <button type="submit">Sign Up</button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  )

}
export default SignUpForm;