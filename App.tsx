import React from "react";
import { StyleSheet, StatusBar, View, Dimensions } from "react-native";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
import "@/global.css";
import ProductList from "./app-components/alllProductsList";
import { Heading } from "./components/ui/heading";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GluestackUIProvider style={{ flex: 1 }}>
        <Heading className=" pt-5 pb-5 text-center" size={"4xl"}>
          Bad Products
        </Heading>
        <ProductList />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 5,
    height: Dimensions.get("window").height,
  },
});
