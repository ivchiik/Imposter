import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppText } from "components";

import { styles } from "./Styles";
import { colors } from "constants/index";

interface PackProps {
  name: string;
}

export const Pack = (props: PackProps) => {
  const { name } = props;

  return (
    <Pressable style={styles.container}>
      <AppText style={styles.name}>{name}</AppText>
      <Ionicons
        name="chevron-forward-outline"
        size={15}
        color={colors.textWhite}
      />
    </Pressable>
  );
};
