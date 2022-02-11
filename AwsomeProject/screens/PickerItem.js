import { View, Text, Picker, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";

const FOODS = ["apples", "doughnits", "Yorkshire pie", "pizza", "jellied eels"];
const PickerItem = () => {
  const [value, setValue] = useState("pizza");
  const [value1, setValue1] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Selected:{value} </Text>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => setValue(itemValue)}
      >
        {FOODS.map((food) => (
          <Picker.Item label={food} value={food} />
        ))}
      </Picker>
      <Switch value={value1} onValueChange={setValue1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#ecf0f1",
  },
});
export default PickerItem;
