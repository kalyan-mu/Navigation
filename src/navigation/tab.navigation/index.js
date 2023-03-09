import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProductScreen from "../../screens/product";
import SettingScreen from "../../screens/settings";
import HomeScreen from "../../screens/home";


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
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

function Navigation({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      initialRouteName="HomeScreen"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={30}
              onPress={() => navigation.openDrawer()}
            ></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={30}
              onPress={() => navigation.openDrawer()}
            ></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarStyle: { display: "none" },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={30}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;
