import React, { useEffect, useRef, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppButton, AppText, CustomHeader } from "components";
import { data } from "./OnBoarding.data";

import { styles } from "./Styles";

export const OnBoarding = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const SLIDER_WIDTH = Dimensions.get("window").width + 30;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    const sawOnBoarding = await AsyncStorage.getItem("sawOnBoarding");
    if (sawOnBoarding) {
      navigation.navigate("MAIN" as never);
    }
  };

  const handlePress = async () => {
    if (index + 1 < data.length) {
      setIndex(index + 1);
      isCarousel?.current?.snapToNext();
    } else if (index == 7) {
      navigation.navigate("MAIN" as never);
      await AsyncStorage.setItem("sawOnBoarding", "true");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {index === 0 && (
        <CustomHeader mainText=" " canGoTranslate style={styles.header} />
      )}
      <View style={styles.carouselContainer}>
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.carouselWrapper}>
              <item.Icon width={250} height={250} />
              {item.title && (
                <AppText style={styles.title}>{item?.title}</AppText>
              )}
              <View style={styles.textWrapper}>
                <AppText style={styles.text}>{item.text}</AppText>
              </View>
            </View>
          )}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => {
            setIndex(index);
          }}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={styles.dotStyle}
        />
      </View>

      <AppButton text="Next" onPress={handlePress} style={styles.btn} />
    </SafeAreaView>
  );
};
