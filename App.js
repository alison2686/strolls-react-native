import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AccountScreen from "./src/screens/AccountScreen";
import CreatePinScreen from "./src/screens/CreatePinScreen";
import FindRouteScreen from "./src/screens/FindRouteScreen";
import PinConfirmationScreen from "./src/screens/PinConfirmationScreen";
import RouteResultScreen from "./src/screens/RouteResultScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import UploadPhotoScreen from "./src/screens/UploadPhotoScreen";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Strolls: A Walking Adventure!</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
