import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { RootNavigation } from "./src/navigation/RootNavigation";
import "./src/i18n/i18n";


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <RootNavigation />
    </>
  );
}
