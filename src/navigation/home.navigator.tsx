import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../scenes/home/index";

const Stack = createStackNavigator();

export const HomeNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);
