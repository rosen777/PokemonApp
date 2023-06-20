import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "./App";

type Pokemon = {
  name: String;
  id: number;
  types: String[];
  height?: number;
  weight?: number;
};

type FavouritePokemonScreenProps = {
  pokemon: Pokemon;
};

type ProfileScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "PokemonScreen"
>;

export const FavoritePokemonScreen: React.FC<ProfileScreenNavigationProps> = ({
  route,
  navigation,
}) => {
  const { pokemon } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1008.png",
              }}
              style={styles.image}
            />
          </View>
          <Text style={styles.heading}>Name: {pokemon.name}</Text>
          <Text style={styles.text}>Id: {pokemon.id}</Text>
          <Text style={styles.text}>Type: {pokemon.types[0]}</Text>
          <Text style={styles.text}>Height: {pokemon.height}</Text>
          <Text style={styles.text}>Width: {pokemon.weight}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginTop: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#1a1a1a",
  },
  text: {
    fontSize: 18,
    color: "#1a1a1a",
  },
  card: {
    backgroundColor: "#89CFB3",
    borderColor: "#1a1a1a",
    borderWidth: 1,
    padding: 24,
    justifyContent: "center",
    borderRadius: 40,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
});
