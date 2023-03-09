import React from "react";
import { View } from "react-native";
import { Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";

function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <DrawerItem
            icon={() => <AntDesign name="home" size={25} color="black" />}
            label="Home"
            onPress={() => {
              props.navigation.navigate("Navigation");
            }}
          />
          <DrawerItem
            icon={() => <AntDesign name="profile" size={25} color="black" />}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
          <DrawerItem
            icon={() => <AntDesign name="dashboard" size={25} color="black" />}
            label="Dashbord"
            onPress={() => {
              props.navigation.navigate("Dashbord");
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          icon={() => <AntDesign name="logout" size={25} color="black" />}
          label="Log Out"
          onPress={() => {
            null;
          }}
        />
      </Drawer.Section>
    </View>
  );
}

export default DrawerContent;