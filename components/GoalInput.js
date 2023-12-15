import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput(props) {
    const [inputText, setInputText] = useState("");

    function goalInputHandler(text) {
        setInputText(text);
    }

    function cancelButtonHandler() {
        props.setModal(false);
        setInputText("");
    }

    function submitButtonHandler() {
        props.buttonHandler(inputText);
        setInputText("");
        props.setModal(false);
    }
    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={goalInputHandler}
                    placeholder="Add Daily Goal"
                    style={styles.textInput}
                    value={inputText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD GOAL" onPress={submitButtonHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={cancelButtonHandler} />
                    </View>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        marginBottom: 24,
    },
    textInput: {
        borderWidth: 1,
        padding: 8,
        borderColor: "#c28f8f",
        width: "90%",
        alignItems: "center",
        borderRadius: 5,
        marginHorizontal: 18,
        // flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        margin: 8,
    },
    button: {
        margin: 8,
        width: "40%",
    }
})