import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../../screens/profile";
import Dashbord from "../../screens/dashbord";
import Navigation from "../tab.navigation";
import DrawerContent from "./drawer.content/drawer.content";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Navigation"
        component={Navigation}
        options={{ headerShown: false, title: "Home" }}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Dashbord" component={Dashbord} />
    </Drawer.Navigator>
  );
}

export default MyDrawer
