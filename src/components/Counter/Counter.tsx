import React from "react";
import { Pressable, View } from "react-native";

import { AppText } from "components";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./Styles";
import { colors } from "constants/index";

interface CounterProps {
  players?: number;
  imposters?: number;
  onBack: () => void;
  onForward: () => void;
}

export const Counter = (props: CounterProps) => {
  const { players, imposters, onBack, onForward } = props;

  return (
    <View style={styles.numberWrapper}>
      <Pressable onPress={onBack}>
        <Ionicons
          name="caret-back-outline"
          size={50}
          color={colors.creamWhite}
        />
      </Pressable>
      <AppText style={styles.playersNumber}>
        {players ? players : imposters}
      </AppText>
      <Pressable onPress={onForward}>
        <Ionicons
          name="caret-forward-outline"
          size={50}
          color={colors.creamWhite}
        />
      </Pressable>
    </View>
  );
};
