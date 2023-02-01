import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { User } from "../entities/User";

interface ItemProps {
  userObject: User;
}

const ListItem: React.FC<ItemProps> = ({ userObject }) => {
  return (
    <View
      style={{
        margin: 15,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "blue",
      }}
    >
      <View style={{ display: "flex", flexDirection: "row", margin: 10 }}>
        <Text>NAME: </Text>
        <Text>{userObject.name}</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", margin: 10 }}>
        <Text>SURNAME: </Text>
        <Text>{userObject.surname}</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", margin: 10 }}>
        <Text>BMI: </Text>
        <Text>{userObject.BMI.toFixed(2)} kg/m2</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default ListItem;
