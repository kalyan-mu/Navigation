import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/home";
import ProfileScreen from "../../screens/profile";
import Dashbord from "../../screens/dashbord";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Dashbord" component={Dashbord} />
    </Drawer.Navigator>
  );
}

export default MyDrawer
