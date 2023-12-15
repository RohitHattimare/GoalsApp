import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredText) {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    console.log("Item Deleted");
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color={"#3a3abb"}
          onPress={() => setModalIsVisible(true)}
        />
        <GoalInput
          visible={modalIsVisible}
          buttonHandler={addGoalHandler}
          setModal={setModalIsVisible}
        />
        <FlatList
          data={goalsList}
          style={styles.goalsContainer}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                deleteGoalHandler={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
    marginTop: 14,
  },
});
