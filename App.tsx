import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import styles from "./styles";
import { Message } from "./src/components";

export default function App() {
  return (
    <View style={styles.container}>
      <Message />
    </View>
  );
}
