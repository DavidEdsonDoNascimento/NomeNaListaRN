import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";

import { HomeStyles } from "./styles";
import { MessageEmptyList, Participant } from "../../components";

type Participant = {
  id: string;
  name: string;
}
export const Home = () => {

  const participants: Participant[] = [
    { id: '1', name: 'David' },
    { id: '2', name: 'Raiane' },
    { id: '3', name: 'Afonso' },
    { id: '4', name: 'Edson' },
    { id: '5', name: 'Marli' },
    { id: '6', name: 'Maura' },
    { id: '7', name: 'Clodoviu' },
    { id: '8', name: 'Barba' },
    { id: '9', name: 'Carlos' },
    { id: '10', name: 'Julio' },
  ];

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
      <FlatList
        data={participants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Participant name={item.name} onRemove={() => handleParticipantRemove(item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<MessageEmptyList message="Nenhum convidado chegou ao evento ainda." />}
      />
    </View>
  );
}