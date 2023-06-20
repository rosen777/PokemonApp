import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

const bulbasaur = {
  name: "Bulbasaur",
  id: 1,
  types: ["Grass", "Poison"],
  height: 7,
  weight: 69,
};

export const MainScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("PokemonScreen", {
            pokemon: bulbasaur,
          })
        }>
        <Text>Go to Pokemon Screen</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});
