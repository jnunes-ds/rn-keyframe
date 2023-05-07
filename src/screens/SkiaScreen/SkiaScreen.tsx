import React from "react";
import {
  Canvas,
  Circle,
  center,
  Oval,
  rect,
  Group,
  Paint,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";

import S from "./SkiaScreen.styles";

function SkiaScreen() {
  const colors = {
    c1: "#61dbf0",
    c2: "#4797fe",
    c3: "#4390ff",
  };

  const centerArgs = { height: 300, width: 350, x: 25, y: 250 };

  return (
    <Canvas style={S.container}>
      <SweepGradient
        c={vec(128, 128)}
        colors={[colors.c1, colors.c2, colors.c3]}
        start={0}
        end={180}
      />
      <Group style="fill">
        <SweepGradient
          c={vec(180, 180)}
          colors={[colors.c1, colors.c2, colors.c3]}
          start={90}
          end={280}
        />
        <Circle c={center(centerArgs)} r={25} />
      </Group>
      <Group style="stroke" strokeWidth={18}>
        <Group origin={centerArgs}>
          <Oval rect={rect(50, 350, 300, 100)} />
        </Group>
        <Group transform={[{ rotate: Math.PI / 3 }]} origin={centerArgs}>
          <Oval rect={rect(100, 125, 300, 100)} />
        </Group>
        <Group transform={[{ rotate: -(Math.PI / 3) }]} origin={centerArgs}>
          <Oval rect={rect(-175, 425, 300, 100)} />
        </Group>
      </Group>
    </Canvas>
  );
}

export default SkiaScreen;
