import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BMIinputs from "./components/BMIinputs";
import UserList from "./components/UserList";

export default function App() {
  const [userCalc, setUserCalc] = useState([]);
  return (
    <View style={styles.container}>
      <BMIinputs setUserCalc={setUserCalc} />
      <UserList userCalc={userCalc} setUserCalc={setUserCalc} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
