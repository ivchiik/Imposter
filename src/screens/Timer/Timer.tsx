import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "react-native-wheel-pick";

import { CustomHeader } from "components";
import { styles } from "./Styles";

export const Timer = () => {
  const pickerData = Array.from(
    { length: 60 },
    (_, index) => `${index + 1} Min`
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader canGoBack mainText="Timer" />
      <View style={styles.wrapper}>
        <Picker
          style={styles.picker}
          selectedValue="3 Min"
          pickerData={pickerData}
          onValueChange={(value: number) => {
            console.log(value);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
