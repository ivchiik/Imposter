import React from "react";
import { View, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppButton, AppText, CustomHeader } from "components";
import { styles } from "./Styles";

export const Main = () => {
  const navigation = useNavigation();

  const handlePress = () => {};

  const handleExit = () => {
    BackHandler.exitApp();
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader mainText="Imposter" FAQ canGoTranslate />
      <View style={styles.btnWrapper}>
        <AppButton text="Play" onPress={handlePress} />
        <AppButton text="Options" onPress={handlePress} />
        <AppButton text="Quit" onPress={handleExit} />
      </View>
    </SafeAreaView>
  );
};
