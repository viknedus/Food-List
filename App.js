import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View } from "react-native";

// imports from local files
import AppBarNav from "./components/AppBarNav";
import Gridlistt from "./components/Gridlistt";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <AppBarNav />
      <Gridlistt />
    </View>
  );
}
