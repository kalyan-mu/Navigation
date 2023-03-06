import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../components/safearea";
import styles from "../components/styles";

function ProfileScreen() {
  return (
    <SafeArea style={styles.Main}>
      <Text style={styles.Main1}>Profile Screen</Text>
    </SafeArea>
  );
}

export default ProfileScreen;
