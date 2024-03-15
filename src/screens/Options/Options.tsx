import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppButton, AppText, Counter, CustomHeader } from "components";

import { styles } from "./Styles";
import { useNavigation } from "@react-navigation/native";

export const Options = () => {
  const [players, setPlayers] = useState(3);
  const [imposters, setImposters] = useState(1);

  const navigation = useNavigation();

  const handlePlayerSub = () => {
    if (players > 3) {
      setPlayers(players - 1);
    }
  };

  const handlePlayerAdd = () => {
    if (players < 100) {
      setPlayers(players + 1);
    }
  };

  const handleImposterSub = () => {
    if (imposters > 1) {
      setImposters(imposters - 1);
    }
  };

  const handleImposterAdd = () => {
    if (players / 2 - 1 > imposters) {
      setImposters(imposters + 1);
    }
  };

  const handleSetTimer = () => {
    navigation.navigate("TIMER" as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader canGoBack mainText="Options" />
      <View style={styles.wrapper}>
        <View style={styles.counterContainer}>
          <AppText style={styles.playersText}>Players</AppText>
          <Counter
            players={players}
            onBack={handlePlayerSub}
            onForward={handlePlayerAdd}
          />
          <AppText style={[styles.playersText, { marginTop: 30 }]}>
            Imposters
          </AppText>
          <Counter
            imposters={imposters}
            onBack={handleImposterSub}
            onForward={handleImposterAdd}
          />
        </View>
        <View style={styles.btnWrapper}>
          <AppButton text="Choose new pack" />
          <AppButton
            text="Set Timer"
            style={styles.timerBtn}
            onPress={handleSetTimer}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
