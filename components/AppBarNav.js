import React from "react";

// or any pure javascript modules available in npm
import { Appbar } from "react-native-paper";
import Constants from "expo-constants";

const AppBarNav = () => (
  <Appbar.Header style={{ marginTop: Constants.statusBarHeight }}>
    <Appbar.Action icon="menu" />
    <Appbar.Content
      title="Home Screen"
      subtitle="Food/Snacks"
      titleStyle={{ textAlign: "center" }}
      subtitleStyle={{ textAlign: "center" }}
    />
    <Appbar.Action icon="shopping" />
  </Appbar.Header>
);
export default AppBarNav;
