import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppButton, CustomHeader } from "components";

import { styles } from "./Styles";
import Impostor from "assets/images/ImpostorIcon.svg";

export const Main = () => {
  const navigation = useNavigation();

  const handlePlay = () => {
    navigation.navigate("PLAYGAME" as never);
  };

  const handleOptions = () => {
    navigation.navigate("OPTIONS" as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader mainText="Imposter" FAQ canGoTranslate />
      <View style={styles.wrapper}>
        <Impostor width={300} height={300} />
        <View style={styles.btnWrapper}>
          <AppButton text="Play" onPress={handlePlay} style={styles.btnPlay} />
          <AppButton
            text="Options"
            onPress={handleOptions}
            style={styles.btnOptions}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
