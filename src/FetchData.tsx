import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ListContext } from "./ListContext";

enum Category {
  SPORTS = "Sports",
  FOOD = "Food",
  STUDYING = "Studying",
  SOCIAL = "Social",
  PERSONAL = "Personal",
  SELFCARE = "Self care",
}

export interface List {
  _id: string;
  name: string;
  description: string;
  person: string;
  duration: string;
  category: Category;
}

const FetchData = () => {
  const [lists, setLists] = useState<List[]>([]);
  const { lists: contextLists } = useContext(ListContext);
  // Fetch my tasks from the backend :
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<List[]>("http://localhost:8000/lists");
      setLists(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {contextLists.map((list) => (
        <div key={list._id}>
          <Box w="100%" p={4} m={2} borderWidth="1px" borderRadius="lg">
            <h1>{list._id}</h1>
            <h1>{list.name}</h1>
            <p>{list.description}</p>
          </Box>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
