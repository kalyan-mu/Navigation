import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProductScreen from "../../screens/product";
import SettingScreen from "../../screens/settings";
import MyDrawer from "../drawer.navigation/drawer.index";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  MyDrawer: "home",
  Product: "cart",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      initialRouteName="MyDrawer"
    >
      <Tab.Screen
        name="MyDrawer"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        // options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        // options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;
