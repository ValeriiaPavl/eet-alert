import React from "react";
import "@/global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BadProductsScreen from "./BadProductsScreen";
import HelloWorldScreen from "./HelloWorldScreen";
import { RootStackParamListType } from "./types/RootStackParamsList";

const Stack = createNativeStackNavigator<RootStackParamListType>();
export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BadProducts">
      <Stack.Screen name="BadProducts" component={BadProductsScreen} />
      <Stack.Screen name="HelloWorld" component={HelloWorldScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
