import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState, useCallback } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState("");

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert("Please enter a pallete name");
    } else {
      const newcolorPalette = {
        palleteName: name,
        colors: [],
      };
      navigation.navigate("Home", { newcolorPalette });
    }
  }, [name]);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name of Palette</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Palette Name"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
  },
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
  button: {
    height: 40,
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  name: {
    marginBottom: 10,
  },
});

export default ColorPaletteModal;
