import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import styles from "./Home.styles";
import { Message } from "../../components";
import { useCallback, useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  const handleChangeMessageVisibility = useCallback(() => {
    setShow((prevState) => !prevState);
  }, [setShow]);

  return (
    <SafeAreaView style={styles.supraContainer}>
      <View style={styles.container}>
        {show && <Message />}
        <TouchableOpacity
          onPress={handleChangeMessageVisibility}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            {show ? "Fechar mensagem" : "Exibir mensagem"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
