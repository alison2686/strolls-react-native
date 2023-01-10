import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "./src/screens/AccountScreen";
import CreatePinScreen from "./src/screens/CreatePinScreen";
import FindRouteScreen from "./src/screens/FindRouteScreen";
import PinConfirmationScreen from "./src/screens/PinConfirmationScreen";
import RouteResultScreen from "./src/screens/RouteResultScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import UploadPhotoScreen from "./src/screens/UploadPhotoScreen";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Strolls: A Walking Adventure!</Text>
      <Button
        title="Go to Account"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
