import React from "react";
import {
  Canvas,
  Circle,
  center,
  Oval,
  rect,
  Group,
  Rect,
} from "@shopify/react-native-skia";

import S from "./SkiaScreen.styles";

function SkiaScreen() {
  const color = "#6358f5";

  const centerArgs = { height: 300, width: 350, x: 25, y: 250 };

  return (
    <Canvas style={S.container}>
      <Circle c={center(centerArgs)} r={25} color={color} />
      <Group color={color} style="stroke" strokeWidth={18}>
        <Oval rect={rect(50, 350, 300, 100)} />
        <Group transform={[{ rotate: Math.PI / 3 }]} origin={centerArgs}>
          <Oval rect={rect(100, 125, 300, 100)} />
        </Group>
        <Group transform={[{ rotate: -Math.PI / 3 }]} origin={centerArgs}>
          <Oval rect={rect(-175, 425, 300, 100)} />
        </Group>
      </Group>
    </Canvas>
  );
}

export default SkiaScreen;
