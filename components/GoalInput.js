import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

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
                <Image
                    style={styles.image}
                    source={require('../assets/Images/goal.png')}
                />
                <TextInput
                    onChangeText={goalInputHandler}
                    placeholder="Add Daily Goal"
                    style={styles.textInput}
                    value={inputText}

                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="ADD GOAL"
                            onPress={submitButtonHandler}
                            color={"#8a91e9"}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={cancelButtonHandler}
                            color={"#ec388c"}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
    setInputText("");
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        backgroundColor: "#311b6b",
        // marginBottom: 24,
    },
    image: {
        width: 130,
        height: 130,
        margin: 20,
        // backgroundColor: "#c28f8f",
    },
    textInput: {
        borderWidth: 1,
        padding: 16,
        color: "#000000",
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        width: "90%",
        alignItems: "center",
        letterSpacing: 1,
        fontSize: 16,
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
        width: "30%",
    }
})