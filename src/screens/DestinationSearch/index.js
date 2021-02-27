import React, { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import styles from "./styles";
import SearchResults from "../../../assets/data/search";
import { Entypo } from "@expo/vector-icons";

const DestinationSearch = () => {
  const [inputText, setInputText] = useState("");
  return (
    <View style={styles.container}>
      {/* Input component */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      {/* List of destinations */}
      <FlatList
        data={SearchResults}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={27} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearch;
