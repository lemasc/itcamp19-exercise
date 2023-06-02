import { Food } from "../types/food";
import pb from "./pocketbase";

export const getFoodList = () => {
  return pb
    .collection("food")
    .getFullList<Food>()
    .then((list) =>
      list.sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      )
    );
};

export const voteFood = (id: string, initialVote: number) => {
  const updatedData: Partial<Food> = {
    votes: initialVote + 1,
  };
  return pb.collection("food").update<Food>(id, updatedData);
};

export const createFood = (data: Pick<Food, "title">) => {
  const addData: Partial<Food> = {
    title: data.title,
    votes: 0,
  };
  return pb.collection("food").create(addData);
};
