import React from "react";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, { FlipInEasyY, FlipOutEasyY } from "react-native-reanimated";

import S from "./Message.styles";

export default function Message() {
  return (
    <Animated.View
      style={S.container}
      entering={FlipInEasyY.duration(700)}
      exiting={FlipOutEasyY.duration(700)}
    >
      <MaterialIcons name="notifications" color="#FFF" size={18} />
      <Text style={S.title}>Hello World</Text>
    </Animated.View>
  );
}
