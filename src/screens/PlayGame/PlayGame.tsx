import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FlipCard from "react-native-flip-card";

import { AppText, CustomHeader } from "components";
import { styles } from "./Styles";
import Impostor from "assets/images/ImpostorIcon.svg";
import Local from "assets/images/LocalIcon.svg";

export const PlayGame = () => {
  const spy = true;

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader mainText="Imposter" canGoBack />
      <FlipCard
        style={styles.card}
        friction={100}
        perspective={10000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd: boolean) => {
          console.log("isFlipEnd", isFlipEnd);
        }}
      >
        {/* Face Side */}
        <View style={styles.face}>
          <AppText style={styles.cardFrontText}>Player 1</AppText>
          <AppText style={styles.cardFrontText}>Tap to see your role</AppText>
        </View>
        {/* Back Side */}
        <View style={styles.back}>
          {spy ? (
            <View style={styles.backWrapper}>
              <Impostor width={150} height={150} />
              <AppText style={styles.impostorText}>You are an Imposter</AppText>
              <AppText style={styles.impostorHint}>
                Try to understand what are the locals talking about
              </AppText>
            </View>
          ) : (
            <View style={styles.backWrapper}>
              <Local width={150} height={150} />
              <AppText style={styles.localText}>Some Word</AppText>
              <AppText style={styles.localHint}>
                You are a local. All the players except for the impostor know
                the word. Ask others questions to find out which one of them is
                the Impostor.
              </AppText>
            </View>
          )}
        </View>
      </FlipCard>
    </SafeAreaView>
  );
};
