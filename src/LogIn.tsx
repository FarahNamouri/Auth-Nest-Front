import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Center } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const logInDto = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        logInDto
      );
      console.log(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box w="100%" p={4} m={2} borderWidth="1px" borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <Input
          m={"auto"}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          m={"auto"}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Center>
          <Button m={2} colorScheme="blue" type="submit">
            Login
          </Button>
        </Center>
      </form>
    </Box>
  );
}
export default LogIn;
