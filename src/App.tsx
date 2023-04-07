import { useState } from "react";
import FetchData from "./FetchData";
import UpdateList from "./UpdateList";
import SignUpForm from "./SignUpForm";
import LogIn from "./LogIn";
import { Button } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react"
import CreateList from "./CreateList";
function App() {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <div className="App">
      {/* <UpdateList
        id={"list_id"}
        initialList={{
          id: "list_id",
          name: "Study",
          description: "Nest Js",
          person: "Alma",
          duration: "2 hours",
        }}
      /> */}
      <Box  m={2}>
      <Button colorScheme='blue' onClick={handleClick}>My Tasks</Button>
      {showComponent && <FetchData />}
      <SignUpForm />
      <LogIn />
      <CreateList />
      </Box>
    </div>
   
  );
}

export default App;
