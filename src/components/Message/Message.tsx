import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import S from "./Message.styles";

export default function Message() {
  return (
    <View style={S.container}>
      <MaterialIcons name="notifications" color="#FFF" size={18} />
      <Text style={S.title}>Hello World</Text>
    </View>
  );
}
