import React, { useContext, useEffect, useState } from "react";
import { getFoodList } from "../plugins/db";
import { Food } from "../types/food";

type FoodContext = {
  items: Food[];
  getData: () => Promise<void>;
};
const FoodContext = React.createContext({
  items: [],
  getData: async () => {},
});

const FoodProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Food[]>([]);
  const getData = async () => {
    setItems(await getFoodList());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <FoodContext.Provider value={{ getData, items }}>
      {children}
    </FoodContext.Provider>
  );
};

const useFoodData = () => {
  return useContext(FoodContext);
};

export { FoodProvider, useFoodData };
