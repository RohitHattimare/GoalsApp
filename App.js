import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  function goalInputHandler(text) {
    setInputText(text);
  }

  function addGoalHandler() {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { text: inputText, id: Math.random().toString() }
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="Add Daily Goal "
          style={styles.textInput}
        />
        <Button title="ADD GOAL " onPress={addGoalHandler} />
      </View>
      <FlatList
        data={goalsList}
        style={styles.goalsContainer}
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} id={itemData.item.id} />
        }}
        keyExtractor={item => item.id}
        alwaysBounceVertical={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // margin: 10,
    alignItems: "center",
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#837676",
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    padding: 6,
    borderColor: "#c28f8f",
    width: "70%",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 8,
    flex: 2,
  },

  goalsContainer: {
    flex: 5,
  },

});
