import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../components/safearea";
import styles from "../components/styles";

function ProductScreen() {
  return (
    <SafeArea style={styles.Main}>
      <Text style={styles.Main1}>Product Screen</Text>
    </SafeArea>
  );
}

export default ProductScreen;
