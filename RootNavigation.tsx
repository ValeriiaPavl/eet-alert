import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HelloWorldScreen from "./HelloWorldScreen";
import BadProductsScreen from "./BadProductsScreen";

const Stack = createNativeStackNavigator();
export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Bad Products">
      <Stack.Screen name="Bad Products" component={BadProductsScreen} />
      <Stack.Screen name="HelloWorld" component={HelloWorldScreen} />
    </Stack.Navigator>
  );
}
