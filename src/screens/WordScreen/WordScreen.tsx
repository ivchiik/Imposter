import React, { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

import { AppText, CustomHeader } from "components";
import { styles } from "./Styles";

interface WordProps {}

export const WordScreen = (props: WordProps) => {
  const route = useRoute();
  const { title } = route.params as { title: string };

  return (
    <SafeAreaView>
      <CustomHeader mainText={title} canGoBack />
      <AppText>Hello Iva!</AppText>
    </SafeAreaView>
  );
};
