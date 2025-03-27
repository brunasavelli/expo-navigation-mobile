import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawer2 from "./navigation/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer2 />
    </NavigationContainer>
  );
}