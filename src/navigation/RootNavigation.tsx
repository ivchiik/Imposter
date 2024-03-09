import React from "react";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FAQ, Main, Translate } from "screens";

import {
  screenOptions,
  type RootStackParamList,
  ScreenRoutes,
} from "./Navigation.types";

const Stack = createNativeStackNavigator<RootStackParamList>();
export const navigationRef = createNavigationContainerRef();

export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name={ScreenRoutes.MAIN}
          component={Main}
          options={{ animation: "fade" }}
        />
        <Stack.Screen
          name={ScreenRoutes.FAQ}
          component={FAQ}
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen
          name={ScreenRoutes.TRANSLATE}
          component={Translate}
          options={{
            animation: "fade",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
