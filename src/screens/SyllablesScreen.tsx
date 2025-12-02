import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Chip, Button } from 'react-native-paper';

export default function SyllablesScreen() {
  const syllables = ['BA', 'BE', 'BI', 'BO', 'BU', 'CA', 'CE', 'CI'];
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (syllable: string) => {
    if (selected.includes(syllable)) {
      setSelected(selected.filter(s => s !== syllable));
    } else {
      setSelected([...selected, syllable]);
    }
  };

  const handleReset = () => setSelected([]);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#FDF7E4' }}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text
        variant="headlineMedium"
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#5A3E85',
          marginBottom: 20,
        }}
      >
        Monte com Sílabas 🧩
      </Text>

      <View
        style={{
          width: '100%',
          minHeight: 100,
          backgroundColor: '#E8F5E9',
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#A5D6A7',
          padding: 10,
        }}
      >
        <Text variant="headlineMedium" style={{ fontWeight: 'bold' }}>
          {selected.join('-') || 'Escolha abaixo 👇'}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 25,
          justifyContent: 'center',
        }}
      >
        {syllables.map(s => {
          const isSelected = selected.includes(s);
          return (
            <Chip
              key={s}
              onPress={() => handleSelect(s)}
              style={{
                margin: 10,
                paddingVertical: 8,
                backgroundColor: isSelected ? '#A5D6A7' : '#FFFFFF',
                borderWidth: 2,
                borderColor: isSelected ? '#388E3C' : '#ccc',
                borderRadius: 12,
              }}
              textStyle={{
                fontSize: 24,
                fontWeight: 'bold',
                color: isSelected ? '#1B5E20' : '#000',
              }}
            >
              {s}
            </Chip>
          );
        })}
      </View>

      <Button
        mode="contained"
        onPress={handleReset}
        style={{
          marginTop: 30,
          width: '80%',
          backgroundColor: '#7E57C2',
          paddingVertical: 8,
          borderRadius: 12,
        }}
        labelStyle={{ fontSize: 18, fontWeight: 'bold' }}
      >
        Limpar
      </Button>
    </ScrollView>
  );
}
