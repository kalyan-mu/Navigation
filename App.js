import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./src/navigation/drawer.navigation/drawer.index";


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

