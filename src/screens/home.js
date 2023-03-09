import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../components/safearea";
import styles from "../components/styles";
import { TextInput } from "react-native-paper";

function HomeScreen () {
    return (
      <SafeArea>
        <Text style={styles.Main1}>Home Screen</Text>
        <TextInput style={styles.Main2} label="Some Thing" />
      </SafeArea>
    );
}

export default HomeScreen;