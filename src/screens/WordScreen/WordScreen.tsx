import React, { useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

import { CustomHeader, CustomModal, Word } from "components";

import { styles } from "./Styles";
import Add from "assets/images/AddIcon.svg";

interface WordProps {}

export const WordScreen = (props: WordProps) => {
  const route = useRoute();
  const { title } = route.params as { title: string };
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomHeader mainText={title} canGoBack />
      <View style={styles.list}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={() => (
            <>
              <Word />
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
        title="New word"
        close={handleModalClose}
      />
    </SafeAreaView>
  );
};
