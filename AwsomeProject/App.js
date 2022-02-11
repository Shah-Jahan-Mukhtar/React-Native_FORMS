import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import ColorPalette from "./screens/Colors";
// import { SafeAreaView } from "react-native-web";
import File from "./screens/File";
import Callback from "./screens/Callback";
import Forms from "./screens/Forms";
import PickerItem from "./screens/PickerItem";
import ColorPaletteModal from "./screens/ColorPaletteModal";
const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

export default function App() {
  // const [Count, setCount] = useState("");
  // const [obj, setObj] = useState([
  //   { name: "Ali", email: "124@gmail.com" },
  //   { name: "Arslan", email: "123@gmail.com" },
  // ]);

  return (
    // <SafeAreaView style={{ marginTop: 50 }}>
    //   <Text>
    //     Name Update:
    //     {obj[0].name},,,
    //     {obj[1].name} {obj.name2}
    //   </Text>
    //   <Text>
    //     Email Update : {obj[0].email}
    //     {obj[0].email2}
    //   </Text>

    //   <View style={{ flexDirection: "row", padding: 10 }}>
    //     <TouchableOpacity
    //       // onPress={() => setObj({prevObj=>(...prevObj,[0].) }})}
    //     >
    //       <Text> Name update</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={() =>
    //         setObj({ email: "Shahjahan@gmail.com", email2: "hamza@gmail.com" })
    //       }
    //     >
    //       <Text style={{ paddingLeft: 50 }}>Email update</Text>
    //     </TouchableOpacity>
    //   </View>
    // </SafeAreaView>
    // <File />
    // <Callback />
    // <Forms />
    // <PickerItem />

    // <SafeAreaView style={{ marginTop: 50 }}>
    //   <Text>Count:{Count}</Text>

    //   <View style={{ flexDirection: "row", padding: 10 }}>
    //     <TouchableOpacity onPress={() => setCount(Count + 1)}>
    //       <Text> Increment</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => setCount(Count - 1)}>
    //       <Text style={{ paddingLeft: 50 }}>Decrement</Text>
    //     </TouchableOpacity>
    //   </View>
    // </SafeAreaView>

    <NavigationContainer>
      <RootStack.Navigator mode="model">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// import React, { useState, useCallback } from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   TouchableOpacity,
// } from "react-native";

// export default function App() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   const handleDecrement = useCallback(() => {
//     setCount(count - 1);
//   }, [count]);

//   return (
//     <SafeAreaView style={{ marginTop: 300 }}>
//       <Text>Count = {count}</Text>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={handleIncrement}>
//           <Text>Increment</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleDecrement}>
//           <Text>Decrement</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 10,
//   },
// });
