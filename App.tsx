import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FavoritePokemonScreen } from "./FavoritePokemonScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainScreen } from "./MainScreen";
import { Pokemon } from "./types";

export type RootStackParamList = {
  MainScreen: undefined;
  PokemonScreen: { pokemon: Pokemon };
};

const bulbasaur = {
  name: "Bulbasaur",
  id: 1,
  types: ["Grass", "Poison"],
  height: 7,
  weight: 69,
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="PokemonScreen" component={FavoritePokemonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
