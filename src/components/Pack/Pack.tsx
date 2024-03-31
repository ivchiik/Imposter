import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { AppText } from "components";

import { styles } from "./Styles";
import { colors } from "constants/index";

interface PackProps {
  name: string;
}

export const Pack = (props: PackProps) => {
  const { name } = props;
  const navigation = useNavigation();

  const handlePress = () => {
    console.log(name);
    navigation.navigate("WORDSCREEN", {
      title: name,
    });
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <AppText style={styles.name}>{name}</AppText>
      <Ionicons
        name="chevron-forward-outline"
        size={15}
        color={colors.textWhite}
      />
    </Pressable>
  );
};
