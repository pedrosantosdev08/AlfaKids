import React, { useContext } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Avatar, ProgressBar, Card } from 'react-native-paper';
import { ProgressContext } from '../contexts/ProgressContext';

export default function ProfileScreen() {
  const { progress } = useContext(ProgressContext);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#E3F7FF' }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center', // ⭐ Agora centraliza verticalmente!
          alignItems: 'center',
          padding: 20,
        }}
      >
        {/* Avatar */}
        <Avatar.Text
          size={100}
          label="A"
          style={{
            backgroundColor: '#FFCC80',
          }}
          labelStyle={{ fontSize: 40, color: '#5D4037' }}
        />

        {/* Nome */}
        <Text
          variant="headlineMedium"
          style={{
            marginTop: 16,
            fontWeight: 'bold',
            color: '#0277BD',
          }}
        >
          Seu Perfil
        </Text>

        {/* Card de Progresso */}
        <Card
          style={{
            width: '90%',
            padding: 16,
            borderRadius: 18,
            marginTop: 30,
            backgroundColor: '#FFF3D8',
          }}
          elevation={4}
        >
          <Text
            variant="titleMedium"
            style={{ fontWeight: 'bold', color: '#D84315' }}
          >
            📚 Progresso na Alfabetização
          </Text>

          <Text style={{ marginTop: 12, fontSize: 18 }}>
            Alfabeto: {progress.alphabet}%
          </Text>
          <ProgressBar
            progress={progress.alphabet / 100}
            style={{
              height: 12,
              borderRadius: 10,
              backgroundColor: '#FFE0B2',
              marginTop: 6,
            }}
            color="#FF7043"
          />

          <Text style={{ marginTop: 18, fontSize: 18 }}>
            Sílabas: {progress.syllables}%
          </Text>
          <ProgressBar
            progress={progress.syllables / 100}
            style={{
              height: 12,
              borderRadius: 10,
              backgroundColor: '#FFE0B2',
              marginTop: 6,
            }}
            color="#26A69A"
          />

          <Text style={{ marginTop: 18, fontSize: 18 }}>
            Palavras: {progress.words}%
          </Text>
          <ProgressBar
            progress={progress.words / 100}
            style={{
              height: 12,
              borderRadius: 10,
              backgroundColor: '#FFE0B2',
              marginTop: 6,
            }}
            color="#7E57C2"
          />
        </Card>

        <Text style={{ marginTop: 30, fontSize: 18 }}>
          Continue aprendendo! ⭐
        </Text>
      </View>
    </ScrollView>
  );
}
