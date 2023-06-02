import { View, Text, Button } from "react-native";
import { useFoodData } from "../context/FoodContext";
import { voteFood } from "../plugins/db";
import { Food } from "../types/food";
export default function VoteFood({ id, votes }: Pick<Food, "votes" | "id">) {
  const { getData } = useFoodData();
  const onVotePress = async () => {
    await voteFood(id, votes);
    getData();
  };
  return (
    <>
      <Text style={{ padding: 20, fontWeight: "bold", fontSize: 18 }}>
        {votes}
      </Text>
      <Button title="Vote!" onPress={onVotePress} />
    </>
  );
}
