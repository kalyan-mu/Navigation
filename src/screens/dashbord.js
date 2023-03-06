import { Text } from "react-native";
import { SafeArea } from "../components/safearea";
import styles from "../components/styles";

function Dashbord() {
  return (
    <SafeArea style={styles.Main}>
      <Text style={styles.Main1}>Dashbord Screen</Text>
    </SafeArea>
  );
}

export default Dashbord;
