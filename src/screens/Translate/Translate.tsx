import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppText, CustomHeader } from "components";
import { styles } from "./Styles";
import { useTranslation } from "react-i18next";

export const Translate = () => {
  const [pressed, setPressed] = useState("");
  const { i18n } = useTranslation();

  const handlePress = (lang: string) => {
    setPressed(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader canGoBack mainText="Language" />
      <View style={styles.wrapper}>
        <Pressable onPress={() => handlePress("en")}>
          <AppText
            style={[styles.text, pressed === "en" && styles.textPressed]}
          >
            English
          </AppText>
        </Pressable>
        <View style={styles.line} />
        <Pressable onPress={() => handlePress("ka")}>
          <AppText
            style={[styles.text, pressed === "ka" && styles.textPressed]}
          >
            Georgian
          </AppText>
        </Pressable>
        <View style={styles.line} />
      </View>
    </SafeAreaView>
  );
};
