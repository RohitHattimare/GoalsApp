import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  function addGoalHandler(enteredText) {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() }
    ]);
  }

  function deleteGoalHandler(id) {
    console.log("Item Deleted");
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <View style={styles.container}>
      <GoalInput
        buttonHandler={addGoalHandler}
      />
      <FlatList
        data={goalsList}
        style={styles.goalsContainer}
        renderItem={(itemData) => {
          return <GoalItem
            text={itemData.item.text}
            id={itemData.item.id}
            deleteGoalHandler={deleteGoalHandler}
          />
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

  goalsContainer: {
    flex: 5,
  },

});
