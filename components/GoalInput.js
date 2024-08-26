import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal , Image } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredGoalText);
    setEnteredGoalText(""); // Clear the input field after adding
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText} // Bind the TextInput value to state
        />
        <View style={styles.buttonContainer}>
          <View  style={styles.button} >
            <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#a0e65c" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding:16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color : '#120483',
    borderRadius : 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop:16
  },
  button:{
    width: 100,
    marginHorizontal : 8
  },
  image :{
    height : 100,
    width : 100,
    margin : 20
  } 
});
