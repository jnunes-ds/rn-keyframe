import React from "react";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import S from "./Message.styles";

export default function Message() {
  return (
    <Animated.View
      style={S.container}
      entering={FadeIn.duration(700)}
      exiting={FadeOut.duration(700)}
    >
      <MaterialIcons name="notifications" color="#FFF" size={18} />
      <Text style={S.title}>Hello World</Text>
    </Animated.View>
  );
}
