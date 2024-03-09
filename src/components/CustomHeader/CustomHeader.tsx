import React from "react";
import {
  View,
  Pressable,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppText } from "components";

import { styles } from "./Styles";
import { colors } from "constants/index";

interface CustomHeaderProps {
  canGoBack?: boolean;
  canGoTranslate?: boolean;
  mainText?: string;
  mainStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  FAQ?: boolean;
}

export const CustomHeader = (props: CustomHeaderProps) => {
  const { canGoBack, canGoTranslate, FAQ, mainText, mainStyle, style } = props;

  const navigation = useNavigation();

  const LeftComponent = () => {
    const navigation = useNavigation();
    if (canGoBack) {
      return (
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={colors.secondary}
          />
        </Pressable>
      );
    } else if (canGoTranslate) {
      return (
        <Pressable onPress={() => navigation.navigate("TRANSLATE" as never)}>
          <Ionicons name="earth-outline" size={24} color={colors.secondary} />
        </Pressable>
      );
    } else {
      return <View style={{ width: 25 }} />;
    }
  };

  const MainComponent = () => {
    return (
      <AppText style={[styles.mainText, mainStyle]}>
        {mainText ? mainText : "Game"}
      </AppText>
    );
  };

  const RightComponent = () => {
    if (FAQ) {
      return (
        <Pressable onPress={() => navigation.navigate("FAQ" as never)}>
          <Ionicons name="book-outline" size={24} color={colors.secondary} />
        </Pressable>
      );
    } else {
      return <View style={{ width: 25 }} />;
    }
  };

  const Line = () => {
    return <View style={styles.line} />;
  };

  return (
    <>
      <View style={[styles.container, style]}>
        <LeftComponent />
        <MainComponent />
        <RightComponent />
      </View>
      <Line />
    </>
  );
};
