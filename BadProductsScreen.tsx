import { SafeAreaView } from "react-native";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
import ProductList from "./app-components/alllProductsList";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

export default function BadProductsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <GluestackUIProvider style={{ flex: 1 }}>
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
