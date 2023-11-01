import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { HomeStyles } from "./styles";
import { Participant } from "../../components";

export const Home = () => {

  const participants = ['David', 'Raiane', 'Afonso', 'David', 'Raiane', 'Afonso', 'David', 'Raiane', 'Afonso'];

  const handleParticipantAdd = () => {
    console.log('Voce clicou');
  }

  const handleParticipantRemove = (name: string) => {
    console.log('Voce removeyu' + name);
  }

  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.eventName}>
        Nome do Evento
      </Text>
      <Text style={HomeStyles.eventDate}>
        Sexta, 4 de Novembro de 2023.
      </Text>
      <View style={HomeStyles.form}>
        <TextInput
          style={HomeStyles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity
          style={HomeStyles.btn}
          onPress={handleParticipantAdd}
        >
          <Text style={HomeStyles.btnTxt}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map((participant, index) => (
            <Participant key={index} name={participant} onRemove={() => handleParticipantRemove(participant)} />
          ))
        }
      </ScrollView>
    </View>
  );
}