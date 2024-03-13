import React from "react";
import { View, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppButton, AppText, CustomHeader } from "components";
import { styles } from "./Styles";

export const Main = () => {
  const navigation = useNavigation();

  const handlePlay = () => {
    navigation.navigate("PLAYGAME" as never);
  };

  const handleOptions = () => {};

  const handleSupport = () => {
    BackHandler.exitApp();
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader mainText="Imposter" FAQ canGoTranslate />
      <View style={styles.btnWrapper}>
        <AppButton text="Play" onPress={handlePlay} style={styles.btnPlay} />
        <AppButton
          text="Options"
          onPress={handleOptions}
          style={styles.btnOptions}
        />
        <AppButton
          text="Buy me a coffee"
          onPress={handleSupport}
          style={styles.btnSupport}
        />
      </View>
    </SafeAreaView>
  );
};
