import { StyleSheet, Text, View } from "react-native"

export default function GoalItem(props) {
    return (
        <View style={styles.goalsItem}>
            <Text>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    goalsItem: {
        textAlign: "center",
        padding: 8,
        margin: 8,
        borderRadius: 6,
        borderColor: "#4d2a2a",
        borderWidth: 1,
        backgroundColor: "#f86464",
    },

});