import { Text } from "react-native";
import { MessageEmptyListStyle } from "./styles";

type MessageEmptyListProps = {
  message: string;
}
export const MessageEmptyList = ({ message }: MessageEmptyListProps) => {
  return (
    <Text style={MessageEmptyListStyle.txt}>
      {message}
    </Text>
  );
}