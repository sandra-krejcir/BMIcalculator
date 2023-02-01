import { FlatList, SafeAreaView, Text, View } from "react-native";
import { User } from "../entities/User";
import ListItem from "./ListItem";

interface ListProps {
  userCalc: User[];
}

const UserList: React.FC<ListProps> = ({ userCalc }) => {
  return (
    <SafeAreaView style={{ marginTop: 80 }}>
      <FlatList
        data={userCalc}
        renderItem={({ item }) => <ListItem userObject={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default UserList;
