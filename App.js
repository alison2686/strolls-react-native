import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AccountScreen from "./src/screens/AccountScreen";
import CreatePinScreen from "./src/screens/CreatePinScreen";
import FindRouteScreen from "./src/screens/FindRouteScreen";
import PinConfirmationScreen from "./src/screens/PinConfirmationScreen";
import RouteResultScreen from "./src/screens/RouteResultScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import UploadPhotoScreen from "./src/screens/UploadPhotoScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

function NavTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"#89c5cc"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={"#89c5cc"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FindRoute"
        component={FindRouteScreen}
        options={{
          tabBarLabel: "Find Route",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="map-search-outline"
              color={"#89c5cc"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FindRoute"
        component={FindRouteScreen}
        options={{
          tabBarLabel: "Find Route",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="map-search-outline"
              color={"blue"}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator> */}
      <NavTabs />
    </NavigationContainer>
  );
}

export default App;
