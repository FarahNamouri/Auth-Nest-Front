import { useState } from "react";
import FetchData from "./FetchData";
import UpdateList from "./UpdateList";
import SignUpForm from "./SignUpForm";

function App() {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <div className="App">
      <UpdateList
        id={"list_id"}
        initialList={{
          id: "list_id",
          name: "Study",
          description: "Nest Js",
          person: "Alma",
          duration: "2 hours",
        }}
      />
      <button onClick={handleClick}>My Tasks</button>
      {showComponent && <FetchData />}
      <SignUpForm />
    </div>
   
  );
}

export default App;
