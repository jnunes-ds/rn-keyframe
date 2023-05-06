import { StyleSheet, ViewStyle } from "react-native";

const supraContainer: ViewStyle = {
  flex: 1,
  backgroundColor: "#121214",
};

export default StyleSheet.create({
  supraContainer,
  container: {
    ...supraContainer,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 175,
    height: 56,
    borderRadius: 10,
    backgroundColor: "#52f8",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
  },
});
