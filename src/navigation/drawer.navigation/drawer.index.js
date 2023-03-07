import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../../screens/profile";
import Dashbord from "../../screens/dashbord";
import Navigation from "../tab.navigation";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Navigation"
        component={Navigation}
        options={{ title: "Home" }}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Dashbord" component={Dashbord} />
    </Drawer.Navigator>
  );
}

export default MyDrawer
