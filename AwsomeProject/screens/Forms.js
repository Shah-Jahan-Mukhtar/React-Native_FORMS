import React, { useState } from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";

const Forms = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  return (
    <SafeAreaView style={{ marginTop: 25 }}>
      <ScrollView style={styles.container}>
        <Text>Basic Text input:🤫</Text>
        <Text>Current Value :{value1}</Text>
        <TextInput
          style={styles.input}
          value={value1}
          onChangeText={setValue1}
          placeholder="Enter Input here"
        />
        <Text>Number Input :🤫</Text>
        <Text>Current Value :{value2} </Text>
        <TextInput
          style={styles.input}
          value={value2}
          onChangeText={setValue2}
          placeholder="Please Enter Number"
          keyboardType="numeric"
        />
        <Text>Password Input:🤫</Text>
        <Text>Current Value:{value3}</Text>
        <TextInput
          style={styles.input}
          value={value3}
          onChangeText={setValue3}
          secureTextEntry={true}
          placeholder="Please Enter Password"
        />
        <Text>Multiline Input</Text>
        <Text>Current Value:{value4} </Text>
        <TextInput
          style={styles.input}
          value={value4}
          onChangeText={setValue4}
          placeholder="Please Enter The text"
          multiline={true}
          numberOfLines={4}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    marginBottom: 20,
    borderRadius: 8,
  },
  container: {
    padding: 5,
  },
});
export default Forms;
