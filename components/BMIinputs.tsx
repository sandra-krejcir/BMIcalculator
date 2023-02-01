import { useReducer, useState } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { User } from "../entities/User";

interface InputProps {
  setUserCalc: (userCalc: any) => void;
}

const BMIinputs: React.FC<InputProps> = ({ setUserCalc }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  return (
    <SafeAreaView
      style={{
        backgroundColor: "rgba(181, 136, 225, 0.36)",
      }}
    >
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Input your name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setSurname}
        value={surname}
        placeholder="Input your surname"
      />
      <TextInput
        style={styles.input}
        onChangeText={setWeight}
        value={weight}
        placeholder="Input your weight"
      />
      <TextInput
        style={styles.input}
        onChangeText={setHeight}
        value={height}
        placeholder="Input your height"
      />
      <Button
        title="Add"
        onPress={() => {
          const BMI =
            Number(weight) / ((Number(height) / 100) * (Number(height) / 100));
          setUserCalc((userCalc: any) => [
            ...userCalc,
            new User(Math.random(), name, surname, BMI),
          ]);
          setName("");
          setSurname("");
          setWeight("");
          setHeight("");
        }}
      />
    </SafeAreaView>
  );
};

export default BMIinputs;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
