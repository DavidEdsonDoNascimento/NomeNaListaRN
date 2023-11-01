import { View, Text, TouchableOpacity } from "react-native";
import { ParticipantStyle } from "./styles";
import { ParticipantProps } from "./types";

export const Participant = ({ name, onRemove }: ParticipantProps) => {
  return (
    <View style={ParticipantStyle.container}>
      <Text style={ParticipantStyle.name}>
        {name}
      </Text>
      <TouchableOpacity
          style={ParticipantStyle.btn}
          onPress={onRemove}
        >
          <Text style={ParticipantStyle.btnTxt}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  );
};
