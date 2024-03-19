import React from "react";
import { View, Text, FlatList } from "react-native";

import { AppText, CustomHeader, Pack } from "components";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./Styles";
import { data } from "./Packs.data";
import Add from "assets/images/AddIcon.svg";

export const Packs = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader canGoBack mainText="Packs" />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <>
            <Pack name={item.name} />
            <View style={styles.line} />
          </>
        )}
      />
      <View style={styles.container}>
        <Add width={100} height={100} />
      </View>
    </SafeAreaView>
  );
};
