import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Center } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    const signUpDto = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/auth/signup",
        signUpDto
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to sign up. Please try later.");
    }
  };

  return (
    <Box w="100%" p={4} m={2} borderWidth="1px" borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <Center>
          <Button m={2} colorScheme="blue" type="submit">
            Sign Up
          </Button>
        </Center>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </Box>
  );
}
export default SignUpForm;
