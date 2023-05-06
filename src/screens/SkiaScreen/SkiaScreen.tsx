import React from "react";
import { Canvas, Circle, center } from "@shopify/react-native-skia";

import S from "./SkiaScreen.styles";

function SkiaScreen() {
  return (
    <Canvas style={S.container}>
      <Circle
        c={center({ height: 300, width: 350, x: 25, y: 250 })}
        r={25}
        color="#6358f5"
      />
    </Canvas>
  );
}

export default SkiaScreen;
