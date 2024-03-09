import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./Styles";
import { AppText, CustomHeader } from "components";
import { colors } from "constants/index";
import { SafeAreaView } from "react-native-safe-area-context";

export const FAQ = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader canGoBack mainText="FAQ" />
      <ScrollView
        style={styles.textContainer}
        showsVerticalScrollIndicator={false}
      >
        <AppText style={styles.title}>WHAT DO WE START WITH?</AppText>
        <AppText style={styles.text}>
          CHOOSE THE GAME SETTINGS: A WORD PACK, PLAYING TIME, THE NUMBER OF
          PLAYERS AND IMPOSTERS. BY THE WAY, YOU CAN ALSO CHOOSE THE PLAYING
          LANGUAGE AND PRACTICE FOREIGN LANGUAGES WITH FRIENDS!
        </AppText>
        <AppText style={styles.title}>WHAT NEXT?</AppText>
        <AppText style={styles.text}>
          THERE ARE TWO TYPES OF ROLES: LOCALS AND IMPOSTERS. PASS THE PHONE
          AROUND SO EVERYONE CAN GET THEIR ROLE.
        </AppText>
        <AppText style={styles.title}>CAN ANOTHER PLAYER SEE MY ROLE?</AppText>
        <AppText style={styles.text}>
          NO, THEY CAN'T. WHEN YOU TAP ON THE CARD, IT FLIPS OVER. ON THE OTHER
          SIDE THERE IS INFORMATION ABOUT WHETHER YOU ARE A IMPOSTER, AND IF YOU
          ARE NOT, THERE IS A LOCATION. AFTER YOU TAP ONCE AGAIN THE CARD WILL
          DISAPPEAR AND YOU WILL SEE THE COVER OF THE NEXT CARD. PASS THE PHONE
          TO THE NEXT PLAYER SO THEY CAN FLIP THE CARD OVER AND GET THEIR ROLE.
        </AppText>
        <AppText style={styles.title}>HOW DO WE PLAY?</AppText>
        <AppText style={styles.text}>
          AFTER EVERYONE HAS GOT THEIR ROLE, START PLAYING. ASK EACH OTHER
          QUESTIONS CONNECTED WITH THE LOCATION FROM THE LOCALS' CARDS. FOR
          EXAMPLE: «WHAT IS THE COLOR OF THIS PLACE?», «HOW OFTEN DO YOU GO
          THERE?», «IS THIS A NICE PLACE TO VISIT?» THE LOCALS SHOULD EXPOSE THE
          IMPOSTER — THE PERSON WHO DOESN'T UNDERSTAND WHAT LOCATION THE OTHERS
          ARE TALKING ABOUT. THE IMPOSTER SHOULD ACT AS IF THEY KNEW THE
          LOCATION AND AT THE SAME TIME THEY SHOULD TRY TO GUESS IT.
        </AppText>
        <AppText style={styles.title}>
          I HAVE A GUESS ABOUT WHO THE IMPOSTER IS. WHAT SHOULD I DO?
        </AppText>
        <AppText style={styles.text}>
          SAY: «I KNOW WHO THE IMPOSTER IS.» THEN ON THE COUNT OF THREE ALL THE
          PLAYERS SHOULD POINT AT THE PERSON WHO IS THE IMPOSTER, IN THEIR VIEW.
          IF ALL THE PLAYERS HAVE CHOSEN THE SAME PERSON, THIS PERSON HAS TO
          REVEAL THEIR ROLE. IF THEY ARE A LOCAL, THE IMPOSTER WINS. IF THEY ARE
          THE IMPOSTER, THE LOCALS WIN. IF THE PLAYERS HAVE POINTED AT DIFFERENT
          PEOPLE, THE GAME CONTINUES.
        </AppText>
        <AppText style={styles.title}>
          I AM THE IMPOSTER AND I THINK I KNOW WHAT LOCATION THE OTHERS ARE
          TALKING ABOUT. WHAT DO I DO?
        </AppText>
        <AppText style={styles.text}>
          JUST SAY: «I KNOW THE LOCATION» AND THEN NAME IT. IF YOU ARE RIGHT -
          YOU WIN. IF YOU ARE WRONG — THE LOCALS WIN.
        </AppText>
        <AppText style={styles.title}>WHY IS THERE A TIMER?</AppText>
        <AppText style={styles.text}>
          IF THE LOCALS FIND OUT WHO THE IMPOSTER IS BEFORE THE TIME IS UP, THEY
          WIN. IF THE IMPOSTER MANAGES TO STAY UNEXPOSED FOR THE WHOLE TIME —
          THEY WIN.
        </AppText>
        <AppText style={styles.title}>
          HOW DO WE PLAY WITH SEVERAL IMPOSTERS IN A GAME?
        </AppText>
        <AppText style={styles.text}>
          THE NUMBER OF IMPOSTERS MUST BE LESS THAN THE NUMBER OF LOCALS. IF
          THERE ARE MORE THAN ONE IMPOSTERS, EACH OF THEM PLAYS FOR THEMSELVES.
          TO WIN THE LOCALS HAVE TO EXPOSE ALL THE IMPOSTERS. IF THEY DON'T
          DISLOSE ALL THE IMPOSTERS, THE ONES WHO WERE NOT EXPOSED WIN. WHEN THE
          PLAYERS ARE POINTING AT A PERSON WHO IS LIKELY TO BE A IMPOSTERS: IF
          THEY ARE A LOCAL — THE IMPOSTERS WIN. IF THEY ARE A IMPOSTERS — THEY
          LEAVE THE GAME AND THE GAME CONTINUES UNTIL ALL THE IMPOSTERS ARE
          FOUND. WHEN ONE OF THE IMPOSTERS NAMES THE LOCATION: IF THEY ARE RIGHT
          — THE GAME ENDS AND THE IMPOSTERS WINS. IF THEY NAME A WRONG PLACE,
          THE GAME CONTINUES WITHOUT THEM.
        </AppText>
        <AppText style={styles.title}>I THINK THAT CARDS ARE NOT RANDOM.</AppText>
        <AppText style={styles.text}>
          DON'T WORRY, WE HAVE CHECKED. THE CARDS ARE RANDOM.
        </AppText>
      </ScrollView>
    </SafeAreaView>
  );
};

// TEXTS COLORS
