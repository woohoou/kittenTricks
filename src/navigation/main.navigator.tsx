import React from "react";
import { LogBox } from "react-native";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainBottomNavigation } from "../scenes/main/main-bottom-navigation.component";
import { MainDrawer } from "../scenes/main/main-drawer.component";
import { HomeNavigator } from "./home.navigator";

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/*
 * When dev is true in .expo/settings.json (started via `start:dev`),
 * open Components tab as default.
 */

const ROOT_ROUTES: string[] = ["Home", "Patients", "Branches", "Benefits"];

const TabBarVisibilityOptions = ({ route }): BottomTabNavigationOptions => {
  const isNestedRoute: boolean = route.state?.index > 0;
  const isRootRoute: boolean = ROOT_ROUTES.includes(route.name);

  return { tabBarVisible: isRootRoute && !isNestedRoute };
};

const MainTabsNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    screenOptions={TabBarVisibilityOptions}
    initialRouteName={"Home"}
    tabBar={(props) => <MainBottomNavigation {...props} />}
  >
    <BottomTab.Screen name="Home" component={HomeNavigator} />
    <BottomTab.Screen name="Patients" component={HomeNavigator} />
    <BottomTab.Screen name="Branches" component={HomeNavigator} />
    <BottomTab.Screen name="Benefits" component={HomeNavigator} />
  </BottomTab.Navigator>
);

export const MainNavigator = (): React.ReactElement => (
  <Drawer.Navigator drawerContent={(props) => <MainDrawer {...props} />}>
    <Drawer.Screen name="Home" component={MainTabsNavigator} />
    <Drawer.Screen name="Libraries" component={HomeNavigator} />
  </Drawer.Navigator>
);

LogBox.ignoreLogs(["Accessing the 'state'"]);
