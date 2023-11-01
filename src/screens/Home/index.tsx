import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native";

import { HomeStyles } from "./styles";
import { MessageEmptyList, Participant } from "../../components";
import uuid from 'react-native-uuid';

type Participant = {
  id: string;
  name: string;
}
export const Home = () => {

  const [participants, setparticipants] = useState<Participant[]>([]);
  const [participantName, setParticipantName] = useState('');

  const handleParticipantAdd = () => {

    if (!participantName) {
      return;
    }

    const participantExists = participants.find(p => p.name === participantName);

    if (participantExists) {
      Alert.alert('Participante Existe', 'Ja existe um participante com este nome.');
      return;
    }

    const key = uuid.v4().toString();
    setparticipants([
      ...participants,
      {
        id: key,
        name: participantName
      }
    ]);
    setParticipantName('');
  }

  const handleParticipantRemove = (item: Participant) => {
    const participant = participants.find(p => {
      if (item.id == p.id) {
        return p
      }
    });

    if (!participant) {
      console.log('usuario nao encontrado');
      return;
    }

    Alert.alert('Remover', `Remover o participante ${item.name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          const index = participants.findIndex(p => {
            if (item.id == p.id) {
              return p
            }
          });
          participants.splice(index, 1);
          setparticipants([...participants]);
          Alert.alert('Removido da lista!')
        }
      },
      {
        text: 'Nao',
        style: 'cancel'
      }
    ]);
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
          onChangeText={txt => setParticipantName(txt)}
          value={participantName}
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
          <Participant name={item.name} onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<MessageEmptyList message="Nenhum convidado chegou ao evento ainda." />}
      />
    </View>
  );
}