import React, { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";

import { AppText, CustomHeader, Pack, CustomModal } from "components";
import { SafeAreaView } from "react-native-safe-area-context";

import { data } from "./Packs.data";
import { styles } from "./Styles";
import Add from "assets/images/AddIcon.svg";

export const Packs = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader canGoBack mainText="Packs" />
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <>
              <Pack name={item.name} />
              <View style={styles.line} />
            </>
          )}
        />
      </View>
      <Pressable style={styles.container} onPress={handleModalPress}>
        <Add width={100} height={100} />
      </Pressable>

      <CustomModal
        isVisible={modalVisible}
        hide={() => setModalVisible(false)}
        title="New pack"
        close={handleModalClose}
      />
    </SafeAreaView>
  );
};
