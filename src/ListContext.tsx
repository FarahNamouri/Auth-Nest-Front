import React, { createContext, useState } from "react";
import { List } from "./FetchData";

interface ListContextProps {
  lists: List[];
  addList: (list: List) => void;
}

interface Props {
    children: React.ReactNode;
}

export const ListContext = createContext<ListContextProps>({
  lists: [],
  addList: () => {},
});

export const ListProvider = ({ children }: Props) => {
  const [lists, setLists] = useState<List[]>([]);

  const addList = (list: List) => {
    setLists((prevLists) => [...prevLists, list]);
  };

  return (
    <ListContext.Provider value={{ lists, addList }}>
      {children}
    </ListContext.Provider>
  );
};
