import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, Chip, Surface } from 'react-native-paper';

const correctWord = ['C', 'A', 'S', 'A'];

export default function WordsScreen() {
  const [selected, setSelected] = useState<string[]>([]);
  const [usedLetters, setUsedLetters] = useState<number[]>([]);

  const handleSelect = (letter: string, index: number) => {
    if (selected.length < correctWord.length && !usedLetters.includes(index)) {
      setUsedLetters([...usedLetters, index]);
      setSelected([...selected, letter]);
    }
  };

  const handleReset = () => {
    setSelected([]);
    setUsedLetters([]);
  };

  const isCorrect =
    selected.length === correctWord.length &&
    JSON.stringify(selected) === JSON.stringify(correctWord);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF3D8', padding: 20, alignItems: 'center' }}>
      
      <Text
        variant="headlineMedium"
        style={{ fontWeight: 'bold', color: '#4A90E2', marginTop: 20 }}
      >
        Monte a Palavra ✨
      </Text>

      <Text style={{ marginTop: 8, fontSize: 18, color: '#333', textAlign: 'center' }}>
        Toque nas letras na ordem correta 🧩
      </Text>

      <Surface
        style={{
          marginTop: 30,
          padding: 20,
          borderRadius: 12,
          elevation: 4,
          backgroundColor: '#FFE5A7',
        }}
      >
        <View style={{ flexDirection: 'row', gap: 10 }}>
          {correctWord.map((_, index) => (
            <Chip
              key={index}
              style={{
                width: 60,
                height: 60,
                justifyContent: 'center',
                backgroundColor: '#FFD98E',
                elevation: 2,
              }}
              textStyle={{
                fontSize: 28,
                fontWeight: 'bold',
                color: isCorrect ? '#1B5E20' : '#4A90E2',
              }}
            >
              {selected[index] ?? ''}
            </Chip>
          ))}
        </View>
      </Surface>

      {/* LETRAS */}
      <View style={{ flexDirection: 'row', marginTop: 40, gap: 14 }}>
        {['A', 'C', 'S', 'A'].map((letter, index) => {
          const disabled = usedLetters.includes(index);

          return (
            <Chip
              key={index}
              mode="outlined"
              onPress={() => handleSelect(letter, index)}
              disabled={disabled}
              style={{
                width: 65,
                height: 65,
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: disabled ? '#bbb' : '#4A90E2',
                backgroundColor: '#FFFFFF',
                opacity: disabled ? 0.4 : 1,
              }}
              textStyle={{ fontSize: 26, fontWeight: 'bold', color: '#000' }}
            >
              {letter}
            </Chip>
          );
        })}
      </View>

      {/* FEEDBACK */}
      {selected.length === correctWord.length && (
        <Text
          style={{
            marginTop: 30,
            fontWeight: 'bold',
            fontSize: 22,
            color: isCorrect ? '#007E33' : '#D32F2F',
          }}
        >
          {isCorrect ? 'Parabéns! 🎉' : 'Ops! Tente novamente!'}
        </Text>
      )}

      {/* Reset */}
      <Button
        mode="contained"
        style={{
          marginTop: 40,
          backgroundColor: '#FF7043',
          width: 180,
          paddingVertical: 8,
          borderRadius: 50,
        }}
        labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
        onPress={handleReset}
      >
        Resetar 🔄
      </Button>
    </View>
  );
}
