import { View, Text } from "react-native";
import { useFoodData } from "../context/FoodContext";
import { Food } from "../types/food";
import VoteFood from "./VoteFood";

const FoodItem = ({
  index,
  title,
  votes,
  mode = "vote",
  id,
}: Food & {
  index: number;
  mode?: "vote" | "remove";
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        backgroundColor: "white",
        marginVertical: 12,
        borderRadius: 20,
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{index}</Text>

      <Text style={{ padding: 20, fontWeight: "bold", flexGrow: 1 }}>
        {title}
      </Text>
      {mode === "vote" && <VoteFood votes={votes} id={id} />}
      {mode === "remove" && <DeleteFood id={id} />}
    </View>
  );
};

export default function FoodList({ remove }: { remove?: boolean }) {
  const { items } = useFoodData();
  return (
    <View style={{ width: "100%" }}>
      {items.map((item, index) => (
        <FoodItem
          {...item}
          index={index + 1}
          key={item.id}
          mode={remove ? "remove" : "vote"}
        />
      ))}
    </View>
  );
}
