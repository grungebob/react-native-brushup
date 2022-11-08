import { View, Text } from "react-native";
import { HomeScreen } from "./components/HomeScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HomeScreen />
    </View>
  );
}
