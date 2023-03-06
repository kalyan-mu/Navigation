import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../components/safearea";
import styles from "../components/styles";

function HomeScreen () {
    return (
      <SafeArea style={styles.Main}>
        <Text style={styles.Main1}>Home Screen</Text>
      </SafeArea>
    );
}

export default HomeScreen;