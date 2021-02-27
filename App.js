import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Post from "./src/components/Post";
import HomeScreen from "./src/screens/Home";
import feed from "./assets/data/feed";
import SearchResultScreen from "./src/screens/SearchResults";
import DestinationSearch from "./src/screens/DestinationSearch";

const post1 = feed[0];

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        {/* <SearchResultScreen /> */}
        <DestinationSearch />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
