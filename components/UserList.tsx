import { FlatList, SafeAreaView, Text, View } from "react-native";
import { User } from "../entities/User";
import ListItem from "./ListItem";

interface ListProps {
  userCalc: User[];
  setUserCalc: (userCalc: any) => void;
}

const UserList: React.FC<ListProps> = ({ userCalc, setUserCalc }) => {
  return (
    <SafeAreaView style={{ marginTop: 80 }}>
      <FlatList
        data={userCalc}
        renderItem={({ item }) => (
          <ListItem userObject={item} setUserCalc={setUserCalc} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default UserList;
