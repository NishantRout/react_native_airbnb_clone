import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./styles";
import wallpaper from "../../../assets/images/wallpaper.jpg";
import { Fontisto } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View>
      <Pressable style={styles.searchButton}>
        <Fontisto name="search" size={20} color={"#F15454"} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require("../../../assets/images/wallpaper.jpg")}
        style={styles.image}
      >
        <Text style={styles.title}>Go Near</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
