import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import PalettePreview from "../components/PalettePreview";

const Home = ({ navigation, route }) => {
  const newcolorPalette = route.params
    ? route.params.newcolorPalette
    : undefined;
  const [colorPalettes, setcolorPalettes] = useState([]);
  const [isRefreshing, setisRefreshing] = useState(false);
  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      "https://color-palette-api.kadikraman.vercel.app/palettes"
    );

    if (result.ok) {
      const palletes = await result.json();
      setcolorPalettes(palletes);
    }
  }, []);
  useEffect(() => {
    fetchColorPalettes();
  }, []);

  const handleRefresh = useCallback(async () => {
    setisRefreshing(true);
    await fetchColorPalettes();
    setTimeout(() => {
      setisRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (newcolorPalette) {
      setcolorPalettes((palette) => [newcolorPalette, ...palette]);
    }
  }, [newcolorPalette]);
  return (
    <View>
      <FlatList
        data={colorPalettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            onPress={() => navigation.navigate("ColorPalette", item)}
            palette={item}
          />

          // <TouchableOpacity
          //   onPress={() =>
          //     navigation.navigate("ColorPalette", {
          //       colorPalette: item.paletteName,
          //       colors: item.colors,
          //     })
          //   }
          // >
          //   <Text style={styles.text}>Click to View the colors</Text>
          // </TouchableOpacity>
        )}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ColorPaletteModal");
            }}
          >
            <Text style={styles.buttonText}>Add a color scheme</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "teal",
    marginBottom: 10,
  },
});
export default Home;
