import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import { View, StyleSheet, Text, Button, Image } from "react-native";

const AccountScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Account Screen</Text>
      {/* <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      {/* <Image source={require("../../assets/landing.png")} /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
