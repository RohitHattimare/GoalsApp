import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput(props) {
    const [inputText, setInputText] = useState("");

    function goalInputHandler(text) {
        setInputText(text);
    }

    function submitButtonHandler() {
        props.buttonHandler(inputText);
        setInputText("");
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={goalInputHandler}
                placeholder="Add Daily Goal"
                style={styles.textInput}
                value={inputText}
            />
            <Button title="ADD GOAL" onPress={submitButtonHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
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
})