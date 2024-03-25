import React from "react";
import { Pressable, TextInput, View } from "react-native";
import ReactNativeModal from "react-native-modal";

import { AppButton, AppText } from "components";

import { styles } from "./Styles";
import { colors } from "constants/index";
import Close from "assets/images/CloseIcon.svg";

interface CustomModalProps {
  isVisible?: boolean;
  hide: () => void;
  title: string;
  close: () => void;
}

export const CustomModal = (props: CustomModalProps) => {
  const { isVisible, hide, title, close } = props;

  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <ReactNativeModal isVisible={isVisible} onBackdropPress={hide}>
        <View style={styles.insideContainer}>
          <View style={styles.headWrapper}>
            <View style={styles.empty} />
            <AppText style={styles.title}>{title}</AppText>
            <Pressable onPress={close}>
              <Close width={25} height={25} />
            </Pressable>
          </View>
          <View style={styles.modalFooter}>
            <View style={styles.nameInputContainer}>
              <TextInput
                placeholder="Type..."
                placeholderTextColor={colors.textWhite}
                style={styles.nameInput}
              />
            </View>
            <AppButton
              text="Save"
              style={styles.btn}
              styleText={styles.btnText}
              onPress={handlePress}
            />
          </View>
        </View>
      </ReactNativeModal>
    </View>
  );
};
