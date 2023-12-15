import { Pressable, StyleSheet, Text, View } from "react-native"

export default function GoalItem(props) {
    return (
        <View style={styles.goalsItem}>
            <Pressable android_ripple={{ color: "#6e0d0d", borderless: true }} onPress={props.deleteGoalHandler.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({

    goalsItem: {
        textAlign: "center",
        margin: 8,
        borderRadius: 6,
        borderColor: "#4d2a2a",
        borderWidth: 1,
        backgroundColor: "#f86464",
    },
    goalText: {
        padding: 8,
        fontSize: 18,
        color: "white",
        textAlign: "center",
    }

});