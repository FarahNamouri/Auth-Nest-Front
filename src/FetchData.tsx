import axios from "axios";
import { useEffect, useState } from "react";

enum Category {
    SPORTS = 'Sports',
    FOOD = 'Food',
    STUDYING = 'Studying',
    SOCIAL = 'Social',
    PERSONAL = 'Personal',
    SELFCARE = 'Self care',
  }
  
  interface List {
    _id: string;
    name: string;
    description: string;
    person: string;
    duration: string;
    category: Category;
  }

const FetchData = () => {
    const [lists, setLists] = useState<List[]>([]);
// Fetch my tasks from the backend :
  useEffect(() => {
    const fetchData = async () => {
    const response = await axios.get<List[]>('http://localhost:8000/lists');
    setLists(response.data);
  };
  fetchData();
  }, []);

  
return (
    <div>
        {lists.map(list => (
    <div key={list._id}>
      <h1>{list._id}</h1>
        <h1>{list.name}</h1>
        <p>{list.description}</p>
        <p>{list.category}</p>
    </div>
        ))}
    </div>
)
}

export default FetchData;


