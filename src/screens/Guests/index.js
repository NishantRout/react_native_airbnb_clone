import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View style={styles.container}>
      {/* Row1: Adults */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={{ fontWeight: "600" }}>Adults</Text>
          <Text style={{ color: "#8d8d8d" }}>Ages 13 or above</Text>
        </View>
        {/* Buttons with value */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* - */}

          <Pressable
            style={styles.button}
            onPress={() => setAdults(Math.max(0, adults - 1))}
          >
            <Text style={styles.sign}>-</Text>
          </Pressable>
          {/* value */}
          <Text style={styles.value}>{adults}</Text>
          {/* + */}
          <Pressable
            style={styles.button}
            onPress={() => setAdults(adults + 1)}
          >
            <Text style={styles.sign}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Row1: Children */}

      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={{ fontWeight: "600" }}>Children</Text>
          <Text style={{ color: "#8d8d8d" }}>Ages 2-12</Text>
        </View>
        {/* Buttons with value */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* - */}

          <Pressable
            style={styles.button}
            onPress={() => setChildren(Math.max(0, children - 1))}
          >
            <Text style={styles.sign}>-</Text>
          </Pressable>
          {/* value */}
          <Text style={styles.value}>{children}</Text>
          {/* + */}
          <Pressable
            style={styles.button}
            onPress={() => setChildren(children + 1)}
          >
            <Text style={styles.sign}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Row1: Infants */}

      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={{ fontWeight: "600" }}>Infants</Text>
          <Text style={{ color: "#8d8d8d" }}>Ages under 2</Text>
        </View>
        {/* Buttons with value */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* - */}

          <Pressable
            style={styles.button}
            onPress={() => setInfants(Math.max(0, infants - 1))}
          >
            <Text style={styles.sign}>-</Text>
          </Pressable>
          {/* value */}
          <Text style={styles.value}>{infants}</Text>
          {/* + */}
          <Pressable
            style={styles.button}
            onPress={() => setInfants(infants + 1)}
          >
            <Text style={styles.sign}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestScreen;
