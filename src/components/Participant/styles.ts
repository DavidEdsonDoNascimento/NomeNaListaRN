import { StyleSheet } from "react-native";

export const ParticipantStyle = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  name: {
    color: "#FFFFFF",
    flex: 1,
    fontSize: 16,
    marginLeft: 16,

  },
  btnTxt: {
    color: "#FFF",
    fontSize: 24,
  },
  btn: {
    width: 56,
    height: 56,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
