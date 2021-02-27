import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Post from "./src/components/Post";
import HomeScreen from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {/* <HomeScreen /> */}
        <Post />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
