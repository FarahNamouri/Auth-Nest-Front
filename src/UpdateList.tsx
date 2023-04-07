import axios from "axios";
import { useState } from "react";

enum Category {
  SPORTS = "Sports",
  FOOD = "Food",
  STUDYING = "Studying",
  SOCIAL = "Social",
  PERSONAL = "Personal",
  SELFCARE = "Self care",
}

interface List {
  id: string;
  name: string;
  description: string;
  person: string;
  duration: string;
  category?: Category;
}

interface Props {
  id: string;
  initialList: List;
}

const UpdateList: React.FC<Props> = ({ id, initialList }) => {
  const [list, setList] = useState<List>(initialList);

  const [isUpdated, setIsUpdated] = useState(false);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setList((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8000/lists/${id}`,
        list
      );
      setList(response.data);
      setIsUpdated(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        value={list.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        value={list.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="person"
        value={list.person}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="duration"
        value={list.duration}
        onChange={handleInputChange}
      />
      <button type="submit">
        update
      </button>
    </form>
  );
};

export default UpdateList;
