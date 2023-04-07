import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { Box, Button, Center, Input, Select } from '@chakra-ui/react';

interface ErrorResponse {
    message: string;
}

const CreateListForm: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [person, setPerson] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const listData = {
      name,
      description,
      person,
      duration,
      category,
    };

    try {
      const response = await axios.post('http://localhost:8000/lists/new', listData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
      });
      console.log(response.data); // This will log the newly created list object to the console
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // type assertion :
            const axiosError = error as AxiosError<ErrorResponse>;
            setErrorMessage(axiosError.response?.data?.message || 'An error occurred');
        } else {
            setErrorMessage('An error occurred');
        }
    }
  };

  return (
    <Box  w='100%' p={4} m={2}  borderWidth='1px' borderRadius='lg'>
    <form onSubmit={handleSubmit}>
      {errorMessage && <div>{errorMessage}</div>}
      <div>
        <label>
          Name:
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Person:
          <Input
            type="text"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Duration:
          <Input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Category:
          <Select
            placeholder='Select the category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Social">Social</option>
            <option value="Food">Food</option>
            <option value="Sports">Sports</option>
            <option value="Studying">Studying</option>
            <option value="Social">Social</option>

          </Select>
        </label>
      </div>
      <Center>
      <Button m={2} colorScheme='blue' type="submit">Create List</Button>
      </Center>
    </form>
    </Box>
  );
};

export default CreateListForm;
