import React from "react";
import { View, Text } from "react-native";

import { AppText } from "components";

import { styles } from "./Styles";
import Hand from "assets/images/HandIcon.svg";

interface WordProps {}

export const Word = (props: WordProps) => {
  return (
    <View style={styles.container}>
      <Hand width={25} height={25} />
      <AppText style={styles.word}>Hello Iva!</AppText>
    </View>
  );
};
