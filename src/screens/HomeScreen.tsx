import React, { useContext } from "react";
import { ScrollView, View } from "react-native";
import { Card, Text, Button, Avatar } from "react-native-paper";
import { ProgressContext } from "../contexts/ProgressContext";

export default function HomeScreen({ navigation }: any) {
  const { progress } = useContext(ProgressContext);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#FDF7E4" }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",  // ⭐ Centraliza no meio da tela
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text
          variant="headlineMedium"
          style={{
            marginBottom: 20,
            fontWeight: "bold",
            color: "#5A3E85",
          }}
        >
          Aprender a Ler 📚✨
        </Text>

        {/* Card: Alfabeto */}
        <Card
          mode="elevated"
          style={{
            width: "100%",
            marginBottom: 18,
            backgroundColor: "#FFE0E0",
          }}
          onPress={() => navigation.navigate("Alphabet")}
        >
          <Card.Title
            title="Alfabeto"
            titleStyle={{ fontSize: 22, fontWeight: "bold", color: "#C62828" }}
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="alphabetical"
                color="#fff"
                style={{ backgroundColor: "#FF5252" }}
              />
            )}
          />
        </Card>

        {/* Card: Sílabas */}
        <Card
          mode="elevated"
          style={{
            width: "100%",
            marginBottom: 18,
            backgroundColor: "#E1F5FE",
          }}
          onPress={() => navigation.navigate("Syllables")}
        >
          <Card.Title
            title="Sílabas"
            titleStyle={{ fontSize: 22, fontWeight: "bold", color: "#0277BD" }}
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="format-letter-matches"
                color="#fff"
                style={{ backgroundColor: "#0288D1" }}
              />
            )}
          />
        </Card>

        {/* Card: Palavras */}
        <Card
          mode="elevated"
          style={{
            width: "100%",
            marginBottom: 18,
            backgroundColor: "#E8F5E9",
          }}
          onPress={() => navigation.navigate("Words")}
        >
          <Card.Title
            title="Palavras"
            titleStyle={{ fontSize: 22, fontWeight: "bold", color: "#2E7D32" }}
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="format-letter-case"
                color="#fff"
                style={{ backgroundColor: "#43A047" }}
              />
            )}
          />
        </Card>

        {/* Card: Histórias */}
        <Card
          mode="elevated"
          style={{
            width: "100%",
            marginBottom: 18,
            backgroundColor: "#FFF3E0",
          }}
          onPress={() => navigation.navigate("Stories")}
        >
          <Card.Title
            title="Histórias Interativas"
            titleStyle={{ fontSize: 21, fontWeight: "bold", color: "#EF6C00" }}
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="book-open-page-variant"
                color="#fff"
                style={{ backgroundColor: "#FB8C00" }}
              />
            )}
          />
        </Card>

        {/* Botão Perfil */}
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Profile")}
          style={{
            marginTop: 16,
            width: "100%",
            borderRadius: 10,
            paddingVertical: 6,
            backgroundColor: "#7E57C2",
          }}
          labelStyle={{ fontSize: 18, fontWeight: "bold" }}
          icon="account"
        >
          Meu Perfil
        </Button>
      </View>
    </ScrollView>
  );
}

